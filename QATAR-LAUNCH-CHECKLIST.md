# Glimpse Qatar launch checklist

Preview: https://glimpse-qatar-glimpse-project.vercel.app (auto-deploys from `main`, served `noindex` because it is a `*.vercel.app` host).

Status: the site is content-complete and verified. 96 pages render with no console
errors and no broken internal links. What is left is real-world data, legal sign-off
and the go-live sequence.

---

## 1. Blocked on Marwan: information I need

| # | Item | Where it goes | Notes |
|---|---|---|---|
| 1 | **Live domain** | everywhere | Then `python3 scripts/seo.py --set-domain https://<domain>` rewrites every canonical, hreflang, sitemap URL and robots line in one command. |
| 2 | **Phone number** | `js/footer.js`, `js/header.js`, `index.html`, `contactus.html`, `landing/packages.html`, `llms.txt` | Currently `+974 0000 0000`. Visible on every page and in the click-to-call button. |
| 3 | **WhatsApp number** | `js/footer.js`, `index.html`, `contactus.html` | Currently `wa.me/97400000000`. This is the primary call to action, so it is the most visible placeholder. |
| 4 | **GA4 measurement ID** | 4 files | Currently `G-XXXXXXXXXX`. |
| 5 | **GTM container ID** | 84 files | Currently `GTM-XXXXXXX`. One find-and-replace. |
| 6 | **Qatar email address** | `js/header.js`, `js/footer.js`, `llms.txt` | Currently the shared `hello@theglimpseproject.com`. |
| 7 | **MENA Digital Awards Gold: which year?** | `awards.html` | Every entry on that page carries a year. Without it the Hisense award is only in the case study, not the awards page. |

## 2. Blocked on Marwan: decisions

| # | Decision | Default if nothing changes |
|---|---|---|
| 8 | **Forms.** Contact, careers and booking post to the UAE Formspree inboxes (`mnqrlako`, `mknaallp`, `xbdwvvjj`), tagged "Glimpse QATAR website". | Qatar leads keep landing in the UAE inboxes. |
| 9 | **Live chat.** Chatwoot token in `js/footer.js` is the UAE one. | Shared inbox. |
| 10 | **Calendly.** `calendly.com/hello-theglimpseproject/30min` on the booking page. | Shared calendar. |
| 11 | **Social profiles.** Footer and schema point at the group accounts. | Shared accounts. |
| 12 | **Gorenje creative** on `pages/services/influencer-mgmt.html` still has the tournament logo printed in it (an official sponsor's own ad). | Stays. |
| 13 | **Blog byline** is "Glimpse Qatar" on the six new posts. | Stays. |

## 3. Legal review

| # | Item | Why |
|---|---|---|
| 14 | **Terms of Use governing law** says "laws of the State of Qatar" and "courts of the State of Qatar". | Glimpse Media LLC is a QFC company. The QFC has its own regulations and its own court, so the clause may need to name those instead. |
| 15 | **Privacy policy** has a GDPR section and nothing local. | A QFC company most likely falls under the QFC Data Protection Regulations. |
| 16 | **Advertising page** says "plan and execute" campaigns across "traditional OOH (billboards, transit)" and lists "Billboards / Hoardings". | The QFC licence says the firm may not physically place advertising material, including on billboards, unless the QFCA permits it. Planning and designing is covered; "execute" is ambiguous. |
| 17 | **Influencer disclosure wording** is general ("follows Qatar's applicable advertising and media regulations"). | Should be checked by someone who knows the local rules. No regulator or law is named. |
| 18 | **QFC / Media City logos** are not used. The footer carries a text-only licence line. | Check the QFC's brand rules before adding any official mark. |

## 4. Content still to swap

| # | Item | Status |
|---|---|---|
| 19 | **Portfolio and clients** are the UAE set. | Intentional, per the original brief: swap for Qatar clients when they exist. The Hisense case study is the one piece of Qatar-relevant proof. |
| 20 | **Doha photography.** The contact hero is an Unsplash stock photo of West Bay (`static/images/qatar/doha-skyline-night.jpg`, Akbar Nemati, Unsplash Licence, no attribution required). | Replace with Glimpse's own Doha imagery. |
| 21 | **Blog artwork.** The six Qatar posts reuse header images from older posts. | Replace with new artwork. The National Day post has the weakest match. |
| 22 | **Arabic version.** Not started, by decision. | Needs RTL layout, an Arabic typeface (Poppins has no Arabic glyphs) and native-speaker review. `scripts/seo.py` is ready for an `ar-QA` alternate. |
| 23 | **`awards.html` says "since 2014"** while the rest of the site says founded 2016. There is a real 2014 award on the page. | Confirm which is right. |
| 24 | **No `<h1>`** on `contactus`, `privacy-policy`, `terms-of-use`, `blog`, `landing/booking`, `landing/packages`. Their headings are `<p class="title">`. | Same on the UAE site. Worth fixing for SEO; left alone to keep the design identical. |

## 5. Go-live sequence

1. Add the domain in Vercel (project `glimpse-qatar`, team Glimpse), set `www` as primary, point DNS.
2. Run `python3 scripts/seo.py --set-domain https://<domain>`, replace the placeholders in section 1, then `python3 scripts/seo.py --check`.
3. Push. The `noindex` header only applies to `*.vercel.app`, so the real domain becomes indexable automatically.
4. Google Search Console: add the property, submit `sitemap.xml`. Same for Bing Webmaster Tools.
5. Create the Doha Google Business Profile using the exact name, address and phone on the site. Then swap the footer map link (currently a Google Maps search for Tornado Tower) for the profile link, and add opening hours and review rating back into the schema.
6. **Add the return hreflang tags on the UAE site** (see section 6). Until this is done, the Qatar/UAE hreflang pairing is one-way and Google may ignore it.
7. Local directory listings with the same name, address and phone.

## 6. hreflang needs the UAE site to link back

The Qatar pages are done. Once the Qatar domain is live, each UAE page needs this in its `<head>` (example for `/pages/services/seo`):

    <link rel="alternate" hreflang="en-AE" href="https://www.theglimpseproject.com/pages/services/seo">
    <link rel="alternate" hreflang="en-QA" href="https://<qatar domain>/pages/services/seo">
    <link rel="alternate" hreflang="x-default" href="https://www.theglimpseproject.com/pages/services/seo">

`scripts/seo.py` can be ported to the UAE repo to generate these. Nothing in the UAE repo has been changed.

## 7. Standing rules (do not break these)

- **FIFA.** Glimpse must never be shown as having worked with or for FIFA, because it did not. The World Cup work in Qatar ran through a Qatari partner whose name also cannot be disclosed. The FIFA logo stays off the client grids. Tournament names may appear **only** as Hisense's own sponsorships, as in "Hisense is an official sponsor of ... including the FIFA World Cup 2022". Never "our FIFA campaign", never FIFA in a client list. Current mentions: the Hisense case study in `js/dedicatedPortfolio.js` and one paragraph on `pages/industries/sports-and-events.html`. The live UAE site still shows the FIFA logo on its clients page; if the restriction covers that site too, it needs removing there.
- **No invented Qatar claims.** The copy says Glimpse has a team in Doha backed by the group founded in 2016 and named MENA Agency of the Year 2022-2023. It claims no history, clients or statistics in Qatar. The Hisense work is Hisense Middle East and the activation was in Dubai, so it is presented as regional experience, not Qatar client work.
- **Legal entity** is Glimpse Media LLC, QFC number 05559, licensed by the Qatar Financial Centre Authority. The UAE entity "Glimpse Marketing FZ LLC" has been removed from this site. Source: the incorporation PDF, which is gitignored and must never be committed or deployed.
- **Office address:** C/O Media City Qatar, Floor No. 16, Tornado Tower, No. 17, Doha, Qatar. Coordinates 25.31929, 51.52798.
- **SEO block.** Never hand-edit anything between `<!-- SEO:START -->` and `<!-- SEO:END -->`. Rerun `scripts/seo.py`. New pages with no UAE counterpart go in `QATAR_ONLY` in that script.
- **Shared assets.** Images and videos load from the same CloudFront bucket as the UAE site (read-only). Lottie animations are self-hosted in `static/lottie/` because that bucket only sends CORS headers for the UAE domain.

---

## Appendix A. Bugs found on the UAE site while porting (fixed here, still live there)

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

## Appendix B. Layout rules (read before editing the clients page or footer)

- The clients page stacks logos in hand-balanced columns (`.client_col`), centred vertically, so the column counts create a deliberate symmetric wave. Removing or adding a logo breaks that symmetry and must be rebalanced. UAE pattern is [12,13,14,13,14,13,12] for 91 logos; with 90 (FIFA removed) the Qatar site uses [12,13,13,14,13,13,12] desktop and [17,17,18,17,17] mobile.
- The footer grid row looks wrong as soon as one column is much taller than the others. Keep the Industries column to 6 links, matching the UAE design. All 10 industry pages stay reachable through the "Other industries" cross-links at the bottom of every industry page, so none is orphaned.
