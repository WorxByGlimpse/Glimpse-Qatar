gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

let container = document.querySelector(".parallax__slider-inner");
let slider_outer = document.querySelector(".portfolio__section");
let sections = gsap.utils.toArray(".parallax__item");
let images = [...document.querySelectorAll(".parallax__image")];
// let overlay = document.querySelector(".fullview__section");
let titles = [
  "UAE Pavilion",
  "Chaumet",
  "Lamborghini",
  "Hisense",
  "Genesis",
  "Roxy Cinemas",
  "Hyundai",
  "Al Ain",
];
let maxWidth = 0;
let current = 0;
let target = 0;
let ease = 0.5;

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
    maxWidth += gsap.getProperty(section, "marginLeft");
  });
  return maxWidth;
};

getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(sections, {
  x: () => `-${maxWidth - window.innerWidth + 0.5 * window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    start: "top",
    trigger: ".portfolio__section",
    pin: true,
    scrub: 2.9,
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true,
  },
});

// sections.forEach((sct, i) => {
//   ScrollTrigger.create({
//     trigger: sct,
//     start: () =>
//       "top top-=" +
//       (sct.offsetLeft - window.innerWidth / 2) *
//         (maxWidth / (maxWidth - window.innerWidth)),
//     end: () =>
//       "+=" + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
//     toggleClass: { targets: sct, className: "active" },
//   });
// });

// ScrollTrigger.getById("trigger").kill();

// PARALLAX

images.forEach(
  (image, i) =>
  (image.style.backgroundImage = `url(https://d3i7ke5fj3tp7c.cloudfront.net/images/portfolio/${i + 1
    }.webp)`)
);

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}
function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  animateImage();
  requestAnimationFrame(animate);
}

function animateImage() {
  let ratio = current / images[0].clientWidth;
  let intRatioValue;

  images.forEach((image, id) => {
    intRatioValue = ratio - id * 0.5;
    // less is right more is left
    switch (id) {
      case 1:
        setTransform(image, `translateX(-${intRatioValue * 7.5}%)`);
        break;

      case 3:
        setTransform(image, `translateX(-${intRatioValue * 14}%)`);
        break;

      default:
        setTransform(image, `translateX(-${intRatioValue * 10}%)`);
        break;
    }
  });
}
animate();

// window.addEventListener("scroll", () => {
//   if (overlay.style.display === "block") {
//     // gsap
//     //   .from(".fullview__portfolio-title", {
//     //     duration: 1.5,
//     //     yPercent: -200,
//     //     ease: "power4",
//     //     stagger: 0.1,
//     //   })
//     //   .revert();

//     gsap.to(overlay, {
//       transform: "scale(0)",
//       display: "none",
//       opacity: 0,
//       ease: "power4",
//       duration: 0.6,
//       delay: 0.6,
//     });
//   }
// });
