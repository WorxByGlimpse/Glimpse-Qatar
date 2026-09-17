# Glimpse Qatar launch checklist

## 1. Placeholders to replace

| What | Placeholder in the code | Where |
|---|---|---|
| Domain | `https://www.theglimpseproject.qa` | everywhere. Run `python3 scripts/seo.py --set-domain https://<real domain>` |
| Phone | `+974 0000 0000`, `+97400000000` | `js/footer.js`, `js/header.js`, `index.html`, `contactus.html`, `landing/packages.html`, `llms.txt` |
| WhatsApp | `wa.me/97400000000` | `js/footer.js` |
| Office address | `[QATAR OFFICE ADDRESS]` | same files as phone |
| Google Maps link | `href="#!"` on the two footer address links | `js/footer.js` |
| Coordinates | `25.2854`, `51.5310` (Doha centre) | `js/header.js`, `index.html`, `contactus.html`, `landing/packages.html` (schema + geo meta) |
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

- Terms of Use governing law changed from UAE/Dubai courts to the State of Qatar. Needs legal sign-off, and the legal entity name ("Glimpse Marketing") should be confirmed for Qatar.
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
