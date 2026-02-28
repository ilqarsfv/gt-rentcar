$(document).ready(() => {
  // header scrolled
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // socials fixed
  $(".socialsFixed").click(() => {
    $(".socialsBoxFix").toggleClass("active");
    $(".fixed__socials__open, .fixed__socials__close").toggleClass("hidden");
  });

  // blog swiper
  const swiper = new Swiper(".blogSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper2 = new Swiper(".partnorSwiper", {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
