#!/usr/bin/env python3
"""
SEO head manager for the Glimpse Qatar site.

Every HTML page gets one managed block in its <head> holding the canonical,
the hreflang alternates (Qatar <-> UAE) and the Open Graph tags. The block is
always derived from the file path, so a copy-pasted page can never end up with
someone else's canonical. sitemap.xml and robots.txt are generated from the
same rules.

Usage
  python3 scripts/seo.py                 rewrite heads + sitemap.xml + robots.txt
  python3 scripts/seo.py --check         verify everything, change nothing (exit 1 on problems)
  python3 scripts/seo.py --set-domain https://www.newdomain.qa
                                         swap the site domain everywhere, then rewrite

Settings live in scripts/site.config.json.
"""

import html
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = ROOT / "scripts" / "site.config.json"

START = "<!-- SEO:START managed by scripts/seo.py, do not edit by hand -->"
END = "<!-- SEO:END -->"

# Pages that must never be indexed: no canonical, no hreflang, robots noindex.
NOINDEX = {"404.html"}

# Pages that are a variant of another page. They canonicalise to that page and
# carry no hreflang (hreflang is only valid on canonical URLs).
CANONICAL_OVERRIDE = {"landing/packages.html": "/"}

# Indexable pages with no counterpart on the UAE site. Self canonical, no hreflang.
QATAR_ONLY = set()

# Left out of sitemap.xml. /blog is disallowed in robots.txt (same as the UAE site).
SITEMAP_EXCLUDE = {"blog.html"}

TEXT_SUFFIXES = {".html", ".js", ".txt", ".xml", ".json", ".md", ".css"}


def load_config():
    return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))


def html_files():
    files = [p for p in ROOT.rglob("*.html") if ".git" not in p.parts and "node_modules" not in p.parts]
    return sorted(files, key=lambda p: p.relative_to(ROOT).as_posix())


def clean_path(rel):
    """index.html -> /, faq.html -> /faq, pages/x/y.html -> /pages/x/y (vercel cleanUrls)."""
    if rel == "index.html":
        return "/"
    if rel.endswith("/index.html"):
        return "/" + rel[: -len("index.html")]
    return "/" + rel[: -len(".html")]


def first_match(pattern, text):
    m = re.search(pattern, text, re.I | re.S)
    return re.sub(r"\s+", " ", html.unescape(m.group(1))).strip() if m else ""


def build_block(rel, text, cfg, indent):
    site, uae = cfg["site_url"].rstrip("/"), cfg["uae_url"].rstrip("/")
    lines = [START]

    if rel in NOINDEX:
        lines.append('<meta name="robots" content="noindex, follow">')
    else:
        path = clean_path(rel)
        canonical_path = CANONICAL_OVERRIDE.get(rel, path)
        canonical = site + canonical_path
        lines.append(f'<link rel="canonical" href="{canonical}">')

        if rel not in CANONICAL_OVERRIDE and rel not in QATAR_ONLY:
            lines.append(f'<link rel="alternate" hreflang="{cfg["hreflang_self"]}" href="{canonical}">')
            lines.append(f'<link rel="alternate" hreflang="{cfg["hreflang_uae"]}" href="{uae + path}">')
            lines.append(f'<link rel="alternate" hreflang="x-default" href="{uae + path}">')

        title = first_match(r"<title[^>]*>(.*?)</title>", text)
        desc = first_match(r'<meta\s+name="description"\s+content="(.*?)"\s*/?>', text)
        og_type = "article" if rel.startswith("pages/blog/") else "website"
        lines.append(f'<meta property="og:type" content="{og_type}">')
        lines.append(f'<meta property="og:site_name" content="{html.escape(cfg["site_name"], quote=True)}">')
        lines.append(f'<meta property="og:locale" content="{cfg["og_locale"]}">')
        lines.append(f'<meta property="og:url" content="{canonical}">')
        if title:
            lines.append(f'<meta property="og:title" content="{html.escape(title, quote=True)}">')
        if desc:
            lines.append(f'<meta property="og:description" content="{html.escape(desc, quote=True)}">')

    lines.append(END)
    return "\n".join(indent + line for line in lines)


CANONICAL_RE = re.compile(r'[ \t]*<link\s+rel="canonical"[^>]*>[ \t]*\n?', re.I | re.S)
ROBOTS_META_RE = re.compile(r'[ \t]*<meta\s+name="robots"[^>]*>[ \t]*\n?', re.I | re.S)
BLOCK_RE = re.compile(r"[ \t]*" + re.escape(START) + r".*?" + re.escape(END) + r"[ \t]*\n?", re.S)
VIEWPORT_RE = re.compile(r'([ \t]*)<meta\s+name="viewport"[^>]*>[ \t]*\n', re.I | re.S)


def render(rel, text, cfg):
    text = BLOCK_RE.sub("", text)
    text = CANONICAL_RE.sub("", text)
    if rel in NOINDEX:
        text = ROBOTS_META_RE.sub("", text)
    m = VIEWPORT_RE.search(text)
    if not m:
        raise SystemExit(f"{rel}: no <meta name=\"viewport\"> to anchor the SEO block on")
    block = build_block(rel, text, cfg, m.group(1))
    return text[: m.end()] + block + "\n" + text[m.end():]


def build_sitemap(cfg):
    site = cfg["site_url"].rstrip("/")
    today = date.today().isoformat()
    rels = []
    for p in html_files():
        rel = p.relative_to(ROOT).as_posix()
        if rel in NOINDEX or rel in CANONICAL_OVERRIDE or rel in SITEMAP_EXCLUDE:
            continue
        rels.append(rel)
    # Homepage first, then top-level pages, then sections.
    rels.sort(key=lambda r: (r != "index.html", r.count("/"), r))
    out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for rel in rels:
        out += ["\t<url>", f"\t\t<loc>{site + clean_path(rel)}</loc>", f"\t\t<lastmod>{today}</lastmod>", "\t</url>"]
    out.append("</urlset>")
    return "\n".join(out) + "\n"


def sitemap_locs(text):
    return re.findall(r"<loc>(.*?)</loc>", text)


def build_robots(cfg):
    return "\n".join([
        "User-agent: *",
        "Allow: /",
        "Disallow: /blog.html",
        "Disallow: /blog",
        "Disallow: /.vscode",
        "Disallow: /.gitignore",
        "Disallow: /.htaccess",
        "Disallow: /vercel.json",
        "Disallow: /static/fonts/",
        "",
        f"Sitemap: {cfg['site_url'].rstrip('/')}/sitemap.xml",
        "",
    ])


def set_domain(new, cfg):
    new = new.rstrip("/")
    if not re.match(r"^https://[a-z0-9.-]+$", new):
        raise SystemExit("Domain must look like https://www.example.qa (https, no path, no trailing slash)")
    old = cfg["site_url"].rstrip("/")
    if new == cfg["uae_url"].rstrip("/"):
        raise SystemExit("That is the UAE domain. The Qatar site needs its own.")
    changed = 0
    for p in ROOT.rglob("*"):
        if not p.is_file() or ".git" in p.parts or p.suffix not in TEXT_SUFFIXES:
            continue
        text = p.read_text(encoding="utf-8")
        if old in text:
            p.write_text(text.replace(old, new), encoding="utf-8")
            changed += 1
    print(f"Domain {old} -> {new} in {changed} files")
    return load_config()


def check(cfg):
    site, uae = cfg["site_url"].rstrip("/"), cfg["uae_url"].rstrip("/")
    problems = []
    seen = {}
    for p in html_files():
        rel = p.relative_to(ROOT).as_posix()
        text = p.read_text(encoding="utf-8")
        if render(rel, text, cfg) != text:
            problems.append(f"{rel}: SEO block is stale or hand-edited, rerun scripts/seo.py")
        head = text.split("</head>")[0]
        canon = re.findall(r'<link\s+rel="canonical"\s+href="([^"]*)"', head)
        alts = dict(re.findall(r'<link\s+rel="alternate"\s+hreflang="([^"]*)"\s+href="([^"]*)"', head))
        if rel in NOINDEX:
            if canon or alts:
                problems.append(f"{rel}: noindex page must not carry canonical/hreflang")
            continue
        if len(canon) != 1:
            problems.append(f"{rel}: expected exactly 1 canonical, found {len(canon)}")
            continue
        c = canon[0]
        if not c.startswith(site):
            problems.append(f"{rel}: canonical is off-domain: {c}")
        if c.endswith(".html"):
            problems.append(f"{rel}: canonical points at a redirecting .html URL")
        if rel not in CANONICAL_OVERRIDE:
            if c != site + clean_path(rel):
                problems.append(f"{rel}: canonical is not self-referencing: {c}")
            if c in seen:
                problems.append(f"{rel}: shares a canonical with {seen[c]}")
            seen[c] = rel
        if alts:
            if alts.get(cfg["hreflang_self"]) != c:
                problems.append(f"{rel}: {cfg['hreflang_self']} hreflang must equal the canonical")
            for key in (cfg["hreflang_uae"], "x-default"):
                if alts.get(key) != uae + clean_path(rel):
                    problems.append(f"{rel}: {key} hreflang should be {uae + clean_path(rel)}")
        elif rel not in CANONICAL_OVERRIDE and rel not in QATAR_ONLY:
            problems.append(f"{rel}: missing hreflang alternates")
        # The UAE domain may only appear in the head as an hreflang alternate.
        stripped = re.sub(r'<link\s+rel="alternate"[^>]*>', "", text)
        if uae in stripped:
            problems.append(f"{rel}: references the UAE domain outside hreflang")
        if not re.search(r"<title[^>]*>\s*\S", head):
            problems.append(f"{rel}: missing <title>")

    sm = ROOT / "sitemap.xml"
    current = sm.read_text(encoding="utf-8") if sm.exists() else ""
    if sitemap_locs(current) != sitemap_locs(build_sitemap(cfg)):
        problems.append("sitemap.xml: URL list is out of date, rerun scripts/seo.py")
    if (ROOT / "robots.txt").read_text(encoding="utf-8") != build_robots(cfg):
        problems.append("robots.txt: out of date, rerun scripts/seo.py")

    for line in problems:
        print("FAIL", line)
    print(f"{len(html_files())} pages checked, {len(problems)} problem(s)")
    return 1 if problems else 0


def main():
    cfg = load_config()
    args = sys.argv[1:]
    if args[:1] == ["--check"]:
        sys.exit(check(cfg))
    if args[:1] == ["--set-domain"]:
        if len(args) != 2:
            raise SystemExit("usage: seo.py --set-domain https://www.example.qa")
        cfg = set_domain(args[1], cfg)

    changed = 0
    for p in html_files():
        rel = p.relative_to(ROOT).as_posix()
        text = p.read_text(encoding="utf-8")
        new = render(rel, text, cfg)
        if new != text:
            p.write_text(new, encoding="utf-8")
            changed += 1

    sm = ROOT / "sitemap.xml"
    new_sm = build_sitemap(cfg)
    # Keep existing lastmod dates when the URL list is unchanged.
    if not sm.exists() or sitemap_locs(sm.read_text(encoding="utf-8")) != sitemap_locs(new_sm):
        sm.write_text(new_sm, encoding="utf-8")
    (ROOT / "robots.txt").write_text(build_robots(cfg), encoding="utf-8")
    print(f"Rewrote SEO block in {changed} of {len(html_files())} pages, sitemap.xml and robots.txt are current")
    sys.exit(check(cfg))


if __name__ == "__main__":
    main()
