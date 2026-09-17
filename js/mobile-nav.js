const ham = document.querySelector(".navbar-toggler");
const navBtnFirst = document.querySelectorAll(".nav__toggle:first-child");
const navBtnLast = document.querySelectorAll(".nav__toggle:last-child");
const navBtnMiddle = document.querySelectorAll(".nav__toggle:nth-child(2)");
const navBody = document.querySelector(".nav-body");
const navBodyItems = document.querySelectorAll(".nav-body__item");

const menu = document.querySelector(".mob-main-menu");
menu.innerHTML = `
<ul>
        <li><a class="nav-link-mob" href="/">Home</a></li>
        <li class="mob-services-dropdown-wrap" >
          <a class="nav-link-mob services-link" href="/services">Services</a>  <span id="arrow"></span>
          <div class="mob-services-dropdown">
            <a class="sub-nav-link" href="/pages/services/seo">SEO</a>
            <a class="sub-nav-link" href="/pages/services/sem">SEM</a>
            <a class="sub-nav-link" href="/pages/services/branding">Branding</a>
            <a class="sub-nav-link" href="/pages/services/advertising">Advertising</a>
            <a class="sub-nav-link" href="/pages/services/social-media">Social Media</a>
            <a class="sub-nav-link" href="/pages/services/photography">Photography</a>
            <a class="sub-nav-link" href="/pages/services/digital-strategy">Digital Strategy</a>
            <a class="sub-nav-link" href="/pages/services/video-production">Video Production</a>
            <a class="sub-nav-link" href="/pages/services/ar">Augmented Reality</a>
            <a class="sub-nav-link" href="/pages/services/influencer-mgmt">Influencer Management</a>
            <a class="sub-nav-link" href="/pages/services/reputation-mgmt">Reputation Management</a>
            <a class="sub-nav-link" href="/pages/services/community-mgmt">Community Management</a>
          </div>
        </li>
        <li><a class="nav-link-mob" href="/awards">Awards</a></li>
        <li><a class="nav-link-mob" href="/portfolio">Portfolio</a></li>
        <li><a class="nav-link-mob" href="/clients">Clients</a></li>
        <li><a class="nav-link-mob" href="/blog">Blog</a></li>
        <li><a class="nav-link-mob" href="/contactus">Contact Us</a></li>
      </ul>
      `;
      // <ul class="mob-social-wrap">
      //   <li>
      //     <a target="_blank" href="https://www.instagram.com/theglimpseproject/"
      //       ><i class="fab fa-instagram"></i
      //     ></a>
      //   </li>
      //   <li>
      //     <a target="_blank" href="https://www.facebook.com/TheGlimpseProject/"
      //       ><i class="fab fa-facebook-f"></i
      //     ></a>
      //   </li>
      //   <li>
      //     <a target="_blank" href="https://twitter.com/glimpseproject/"
      //       ><i class="fab fa-twitter"></i
      //     ></a>
      //   </li>
      //   <li>
      //     <a
      //       target="_blank"
      //       href="https://www.linkedin.com/company/glimpse-digital-agency"
      //       ><i class="fab fa-linkedin-in"></i
      //     ></a>
      //   </li>
      //   <li>
      //     <a target="_blank" href="https://www.tiktok.com/@theglimpseproject/"
      //       ><i class="fab fa-tiktok"></i
      //     ></a>
      //   </li>
      // </ul>
const links = menu.querySelectorAll("li");

const navLinksMob = document.querySelectorAll(".nav-link-mob, .sub-nav-link");

navLinksMob.forEach((ele) => {
  if (ele.getAttribute("href") == window.location.pathname) {
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

// Services Dropdown
const arrow = document.getElementById("arrow");
const dropdown = document.getElementsByClassName("mob-services-dropdown")[0];

arrow.onclick = () => {
  if(arrow.classList.contains("active-arrow")) {
    arrow.classList.remove("active-arrow");
    dropdown.style.height = "0px";
  } else if (!arrow.classList.contains("active-arrow")) {
    arrow.classList.add("active-arrow");
    dropdown.style.height = "375px";
  }
}

const tl = gsap.timeline({ paused: true });
// const tlBtn = gsap.timeline({ duration: 0.5, paused: true });
// tlBtn

tl.to(menu, {
  duration: 0,
  opacity: 1,
  height: "100vh", // change this to 100vh for full-height menu
  ease: "expo.inOut",
  zIndex: "99",
})
  .to(document.body, {
    height: "100%",
    overflow: "hidden",
  })
  .to(navBtnFirst, {
    rotation: 45,
    transformOrigin: "50% 50%",
    width: "100%",
    x: -5,
    y: 6,
  })
  .to(
    navBtnLast,
    {
      rotation: -45,
      transformOrigin: "-50% 50%",
      width: "100%",
      x: 3,
      y: 12,
    },
    "<"
  )
  .to(navBtnMiddle, { x: -100, opacity: 0 }, "<");
tl.from(
  links,
  {
    duration: 0.5,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "expo.inOut",
  },
  "-=0.5"
);

tl.reverse();

ham.addEventListener("click", () => {
  //   tlBtn.reversed(!tlBtn.reversed());
  tl.reversed(!tl.reversed());
});
