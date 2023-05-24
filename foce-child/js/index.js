//
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
    }
  });
});

let elements = document.getElementsByClassName("reveal");
for (element of elements) {
  observer.observe(element);
}

// on dit a l'obs quel élément tracker
// observer.observe(document.getElementsByClassName("scroll-title"));

// ----------------------------------------

// code js pour le carrousel

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
  },
});

// Menu burger

const burger = document.querySelector(".burger-button");
const nav = document.querySelector(".burger-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Nuages

const cloud = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cloud-visible");
    }
  });
});

let clouds = document.getElementsByClassName("scroll-cloud");
for (element of clouds) {
  cloud.observe(element);
}
