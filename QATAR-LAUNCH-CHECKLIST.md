# Glimpse Qatar launch checklist

**LIVE since 2026-09-28** at https://www.theglimpseproject.qa (Let's Encrypt cert issued, no noindex header, 92 URLs in the sitemap).
DNS: nameservers `ns01.dns.nexus` / `ns02.dns.nexus`, with `A @ 76.76.21.21` and `CNAME www cname.vercel-dns-0.com`. Vercel DNS was abandoned: its nameservers never served a zone for this domain.
Preview: https://glimpse-qatar-glimpse-project.vercel.app (auto-deploys from `main`, served `noindex` because it is a `*.vercel.app` host).

Status: the site is content-complete and verified. 96 pages render with no console
errors and no broken internal links. What is left is real-world data, legal sign-off
and the go-live sequence.

---

## 1. Blocked on Marwan: information I need

Domain is done: `theglimpseproject.qa` was already the value used throughout the code, so no rewrite was needed.

| # | Item | Where it goes | Notes |
|---|---|---|---|
| 2 | ~~Phone number~~ | done | **+974 3330 3227**, restored 2026-09-28 in the footer Locations block, the Get in touch box, the floating call button, the contact page CTA, `llms.txt` and the `telephone` field in all four schema blocks. Previously pulled so nothing false is published. To restore: footer Locations block and Get in touch box in `js/footer.js`, the floating call button (`#call-btn`, removed with `#wtsp-btn`), and `"telephone"` in the schema in `js/header.js`, `index.html`, `contactus.html`, `landing/packages.html`, plus the Phone line in `llms.txt`. |
| 3 | **WhatsApp number** | still out | No WhatsApp number confirmed. +974 3330 3227 is a Qatar mobile so it may well be the same, but it was not stated, so nothing is published. **Pulled.** To restore: the floating `#wtsp-btn` in `js/footer.js`, the CTA pair on `contactus.html` and the CTA row on `index.html`. The contact page copy also used to say WhatsApp was the fastest way to reach us. |
| 4 | **GA4 measurement ID** | 4 files | **Pulled.** Every file that had a snippet now carries an `<!-- ANALYTICS: ... -->` marker showing where it went. No analytics are being collected. |
| 5 | **GTM container ID** | 84 files | **Pulled**, same marker. |
| 6 | **Qatar email address** | `js/header.js`, `js/footer.js`, `llms.txt` | Currently the shared `hello@theglimpseproject.com`. |
| 7 | **MENA Digital Awards Gold: which year?** | `awards.html` | Every entry on that page carries a year. Without it the Hisense award is only in the case study, not the awards page. |

## 2. Blocked on Marwan: decisions

| # | Decision | Default if nothing changes |
|---|---|---|
| 8 | **Forms.** Contact (`xjykjbao`) and careers (`mdekynwl`) now post to Qatar Formspree forms as of 2026-09-28. The booking form on `landing/booking.html` still posts to the UAE form `xbdwvvjj`. | Booking enquiries keep landing in the UAE inbox. |
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

> Contact numbers and analytics were deliberately removed on 2026-09-24 so the site could go live
> without publishing a fake phone number or a dead tracking ID. Restore them before or right after
> launch: search for `ANALYTICS:` and `TODO(Qatar)` to find every spot.


1. Add the domain in Vercel (project `glimpse-qatar`, team Glimpse), set `www` as primary, point DNS.
2. Run `python3 scripts/seo.py --set-domain https://<domain>`, replace the placeholders in section 1, then `python3 scripts/seo.py --check`.
3. Push. The `noindex` header only applies to `*.vercel.app`, so the real domain becomes indexable automatically.
4. Google Search Console: add the property, submit `sitemap.xml`. Same for Bing Webmaster Tools.
5. Create the Doha Google Business Profile using the exact name, address and phone on the site. Then swap the footer map link (currently a Google Maps search for Tornado Tower) for the profile link, and add opening hours and review rating back into the schema.
6. **Add the return hreflang tags on the UAE site** (see section 6). Until this is done, the Qatar/UAE hreflang pairing is one-way and Google may ignore it.
7. Local directory listings with the same name, address and phone.

## 5b. DNS (resolved)

Vercel's nameservers never created a zone for this domain, so while the `.qa` registry delegated to
them the domain returned SERVFAIL everywhere. Fixed by delegating back to `ns01.dns.nexus` /
`ns02.dns.nexus` and pointing records at Vercel's edge:

    A      @      76.76.21.21
    CNAME  www    cname.vercel-dns-0.com

Do not switch this domain to Vercel nameservers again unless Vercel reports `zone: true` first.

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

## Appendix C. UAE Pavilion removal

Removed entirely on request: the portfolio page and its `dedicatedPortfolio.js` entry (id 2, now unused), the `llms.txt` line, the sitemap entry, the client logo on `clients.html` (both grids), and the logos and carousel slides on `government`, `ar`, `digital-strategy`, `video-production`, `social-media` and `reputation-mgmt`. Both grids were rebalanced ([12,13,13,13,13,13,12] desktop, [17,17,17,17,17] mobile) and the two carousels left with a single slide had their indicator rows removed.

Still present, because each is shared with another brand or is a separate client:
- `EXPO-LG.json` and `UAE-DISNEY.json` on the homepage client animations. Each pairs two logos, so removing one drops LG or Disney with it.
- Expo 2020 as its own client logo on `clients.html` (both grids and the top carousel image) and on `pages/services/photography.html` (logo and a portfolio photo).
