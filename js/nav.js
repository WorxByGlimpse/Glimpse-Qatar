// Insert Lottie Lib Script
const lottieLib = document.createElement("script");
lottieLib.src =
  "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
lottieLib.defer = true;
document
  .querySelector("body")
  .append(document.createComment(" LOTTIE "), lottieLib);

const nav = document.querySelector("nav");
nav.innerHTML = `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8X6X6C"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="nav-wrap">
          <a id="logo-wrap" href="/"> 
            <lottie-player src="https://d3i7ke5fj3tp7c.cloudfront.net/images/logo.json" background="transparent" speed="0.7" intermission="2000" renderer="svg" loop autoplay></lottie-player>
          </a>
          <div class="navbar-toggler">
            <span class="nav__toggle"></span>
            <span class="nav__toggle"></span>
            <span class="nav__toggle"></span>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav gap-0 gap-md-3">
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item services-nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link  text-uppercase" href="/services">Services</a>
                <div class="services-dropdown">
                  <a class="sub-nav-link" href="/pages/services/seo">SEO</a>
                  <a class="sub-nav-link" href="/pages/services/sem">SEM</a>
                  <a class="sub-nav-link" href="/pages/services/branding">Branding</a>
                  <a class="sub-nav-link" href="/pages/services/advertising">Advertising</a>
                  <a class="sub-nav-link" href="/pages/services/photography">Photography</a>
                  <a class="sub-nav-link" href="/pages/services/social-media">Social Media</a>
                  <a class="sub-nav-link" href="/pages/services/digital-strategy">Digital Strategy</a>
                  <a class="sub-nav-link" href="/pages/services/video-production">Video Production</a>
                  <a class="sub-nav-link" href="/pages/services/ar">Augmented Reality</a>
                  <a class="sub-nav-link" href="/pages/services/influencer-mgmt">Influencer Management</a>
                  <a class="sub-nav-link" href="/pages/services/reputation-mgmt">Reputation Management</a>
                  <a class="sub-nav-link" href="/pages/services/community-mgmt">Community Management</a>
                </div>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/awards">Awards</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/clients">Clients</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/blog">Blog</a>
              </li>
              <li class="nav-item">
                <div class="menu-hover-line"></div>
                <a class="nav-link text-uppercase" href="/contactus">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
`;

const navLinks = document.querySelectorAll(".nav-link, .sub-nav-link");

navLinks.forEach((ele) => {
  if (
    ele.getAttribute("href") == window.location.pathname ||
    ele.getAttribute("href").replace(".html", "") == window.location.pathname ||
    ele.getAttribute("href").replace("/", "/index.html") ==
      window.location.pathname
  ) {
    ele.classList.add("active");
  } else if (window.location.pathname.includes("/pages/services")) {
    if (ele.getAttribute("href") === "/services") {
      ele.classList.add("active");
    }
  } else if (window.location.pathname.includes("/pages/blog")) {
    if (ele.getAttribute("href") === "/blog") {
      ele.classList.add("active");
    }
  }
});
