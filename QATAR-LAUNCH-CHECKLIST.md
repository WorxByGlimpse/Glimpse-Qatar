# Glimpse Qatar launch checklist

## 1. Placeholders to replace

| What | Placeholder in the code | Where |
|---|---|---|
| Domain | `https://www.theglimpseproject.qa` | everywhere. Run `python3 scripts/seo.py --set-domain https://<real domain>` |
| Phone | `+974 0000 0000`, `+97400000000` | `js/footer.js`, `js/header.js`, `index.html`, `contactus.html`, `landing/packages.html`, `llms.txt` |
| WhatsApp | `wa.me/97400000000` | `js/footer.js` |
| GA4 ID | `G-XXXXXXXXXX` | `index.html`, `landing/booking.html`, `landing/packages.html`, `js/header.js` |
| GTM ID | `GTM-XXXXXXX` | 74 pages, find and replace |

Find them all: `grep -rn "0000 0000\|97400000000\|QATAR OFFICE ADDRESS\|XXXXXXX\|TODO(Qatar)" --include="*.html" --include="*.js" --include="*.txt" .`

## 2. Still shared with the UAE site (decide per item)

- Formspree forms: contact `mnqrlako`, careers `mknaallp`, booking `xbdwvvjj`. Submissions land in the UAE inboxes, tagged "Glimpse QATAR website" in the subject. Create Qatar forms and swap the `action` URLs.
- Chatwoot live chat token in `js/footer.js`.
- Calendly link `hello-theglimpseproject/30min` in `landing/booking.html`.
- Email `hello@theglimpseproject.com`.
- Social profiles (Instagram, Facebook, X, LinkedIn, TikTok).
- Images and videos load from the same CloudFront bucket (read-only, no effect on the UAE site).

## 3. hreflang needs the UAE site to link back

hreflang only works when both sides reference each other. The Qatar pages are done.
Once the Qatar domain is live, each UAE page needs this in its `<head>` (example for `/pages/services/seo`):

    <link rel="alternate" hreflang="en-AE" href="https://www.theglimpseproject.com/pages/services/seo">
    <link rel="alternate" hreflang="en-QA" href="https://<qatar domain>/pages/services/seo">
    <link rel="alternate" hreflang="x-default" href="https://www.theglimpseproject.com/pages/services/seo">

`scripts/seo.py` can be ported to the UAE repo to generate these. Nothing has been changed in the UAE repo.

## 4. Bugs found on the UAE site while porting (fixed here, still live there)

- Blog posts 28, 29 and 30 have a canonical pointing at blog post 27, so Google is told to ignore them. Post 31 points at a URL that does not exist.
- Most blog canonicals (29 of 31) end in `.html`, which redirects.
- `404.html` has a canonical pointing at `/blog`.
- `faq.html` carries the SEM page's FAQ schema instead of its own 30 questions. The homepage FAQ schema also does not match the visible FAQ.
- `sitemap.xml` is missing `/faq` and blogs 28 to 31, and lists `/blog`, which `robots.txt` blocks.
- Schema longitude for Dubai and Riyadh is negative (puts the offices in the Atlantic).
- `video-production` has the same FAQ twice (9 and 10).
- Mobile menu does not open on about 30 pages (careers, all industry and portfolio pages). `js/mobile-nav.js` uses GSAP before those pages load it, so the script crashes before the hamburger gets its click handler.
- "Related post" links on blog 30 and 31 point at a file that does not exist (`...businesses%20copy.html`).
- `carousel.js` and `parallax-slider.js` throw on pages that do not have their elements (7 pages and `landing/packages`). Harmless, but noisy in the console.
- The S3/CloudFront bucket only sends CORS headers for `www.theglimpseproject.com`, so Lottie animations (header logo, homepage services and client logos) fail on any other host, including the UAE site's own Vercel preview URL.

## 5. Content to review

- Legal entity is now Glimpse Media LLC, QFC number 05559, licensed by the Qatar Financial Centre Authority (Terms of Use, Privacy Policy, footer, schema, `llms.txt`). The UAE entity "Glimpse Marketing FZ LLC" has been removed. Source: the incorporation PDF, which is gitignored and must never be committed.
- Terms of Use governing law currently says "laws of the State of Qatar" and "courts of the State of Qatar". Glimpse Media LLC is a QFC company, and the QFC has its own regulations and its own court. A lawyer should confirm whether the clause should name QFC law and the QFC court instead.
- The QFC licence covers creating advertising campaigns and marketing and brand consultancy, and says the firm may not physically place advertising material, including on billboards, unless the QFCA permits it. `pages/services/advertising.html` says "We plan and execute campaigns across ... traditional OOH (billboards, transit)" and lists "Billboards | Hoardings". Planning and designing outdoor ads is covered. Confirm the wording is fine or soften "execute".
- Removed from schema because they belong to the Dubai listing: Google Business Profile ID, the 4.8/26 review rating, opening hours. Add Qatar values when the Doha Google Business Profile exists.
- Copy says Glimpse has a team in Doha, backed by the group founded in 2016 and MENA Agency of the Year 2022-2023. It does not claim history, clients or stats in Qatar.
- Influencer page: the UAE NMC disclosure FAQ was replaced with general wording on paid partnership disclosure in Qatar. Worth a check by someone who knows the local rules.
- `awards.html` body says "since 2014" while the rest of the site says 2016.
- Portfolio and clients are unchanged, ready to be swapped for Qatar clients.
- No `<h1>` on `contactus`, `privacy-policy`, `terms-of-use` and `landing/booking` (their headings are `<p class="title">`). Same on the UAE site. Worth fixing for SEO, left alone for now to keep the design identical.
- No Arabic version yet. If one is added, extend the hreflang set in `scripts/seo.py` (`ar-QA`).

## 6. Go-live

1. Import the repo in Vercel, add the domain, set www as primary.
2. Run `--set-domain`, replace the placeholders above, run `python3 scripts/seo.py --check`.
3. Google Search Console: add the property, submit `sitemap.xml`. Same for Bing Webmaster Tools.
4. Create the Doha Google Business Profile with the exact name, address and phone used on the site.
5. Add the return hreflang tags on the UAE site (section 3).

## 7. Qatar market round (done, with open items)

Done: formal B2B tone on the homepage, contact and careers pages. Global brands lead the homepage portfolio scroller, the portfolio grid and the testimonials. Four new industry pages (sports and events, real estate, hospitality and tourism, banking and finance), government page rewritten, all industry pages have meta descriptions. Six Qatar blog posts. WhatsApp is the primary call to action, company field on the contact form, Sunday to Thursday 9:00 to 18:00 shown in the footer, contact page, schema and `llms.txt`. Maroon licence mark in the footer. Doha skyline on the contact page.

Open:
- Office address is set: C/O Media City Qatar, Floor No. 16, Tornado Tower, No. 17, Doha, Qatar. Coordinates 25.31929, 51.52798 (Tornado Tower, West Bay, from OpenStreetMap). The footer links to a Google Maps search for the tower; swap in the Google Business Profile link once it exists.
- FIFA must not be used: the work was done through a partner in Qatar whose name cannot be disclosed. The FIFA logo is removed from both client grids and the word FIFA appears nowhere in the site copy. Do not add it back. The live UAE site still shows the same FIFA logo on its clients page.
- Hisense World Cup work may be mentioned. The Sports and Events page has one sentence. It can become a case study once the scope is written down (channels, deliverables, results).
- One existing image still contains the tournament logo: the Gorenje creative on `pages/services/influencer-mgmt.html` (a Hisense Group brand, shown as an official sponsor ad). Decide whether to keep it.
- Arabic version: not started, by decision. Needs RTL layout, an Arabic typeface (Poppins has no Arabic glyphs) and native-speaker review. `scripts/seo.py` is ready for an `ar-QA` alternate.
- Image credit: `static/images/qatar/doha-skyline-night.jpg` is by Akbar Nemati on Unsplash (photo ID Q8NuHm4PbXc), used under the Unsplash License. Attribution is not required. Replace with Glimpse's own Doha photography when available.
- The six new blog posts reuse header images from older posts. Replace with new artwork.
- Privacy policy still has a GDPR section and nothing local. As a QFC company, Glimpse Media LLC most likely falls under the QFC Data Protection Regulations. Needs a lawyer.
- The "Licensed by the Qatar Financial Centre Authority" line is text only. Check the QFC's rules before using any official QFC or Media City logo.
- Off-site: Doha Google Business Profile and local directory listings, using the exact name, address and phone shown on the site.
