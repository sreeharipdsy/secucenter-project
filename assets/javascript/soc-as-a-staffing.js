//MOBILE-NAVIGATION
(function () {
  "use strict";

  //Easy selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  //Easy event listener function
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  //Easy on scroll event listener
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };
  //Navbar links active state on scroll
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);
  //Mobile nav toggle
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });
})();

//section-five
// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   let currentIndex = (slideIndex += n);
//   showSlides((slideIndex += n));
//   console.log({ n, slideIndex, currentIndex });
//   const img = document.getElementById("outcomes-img-three");
//   if (currentIndex === 0 || currentIndex === 4) {
//     currentIndex = 1;
//   }
//   console.log(
//     `assets/images/page-2 (SOC as a Staffing)/section-5/img-${currentIndex}/img-${currentIndex}.svg`
//   );
//   img.setAttribute(
//     "src",
//     `assets/images/page-2 (SOC as a Staffing)/section-5/img-${currentIndex}/img-${currentIndex}.svg`
//   );
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("carousel-caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

let selectedSlide = 0;
const slideItemsContainer = document.getElementsByClassName("carousel-caption");
const img = document.getElementById("outcomes-img-three");
function changeSlide(n) {
  slideItemsContainer[selectedSlide].classList.remove("d-block");
  slideItemsContainer[selectedSlide].classList.add("d-none");
  if (selectedSlide === 0 && n === -1) {
    selectedSlide = 2;
  } else if (selectedSlide === 2 && n === 1) {
    selectedSlide = 0;
  } else {
    selectedSlide += n;
  }

  slideItemsContainer[selectedSlide].classList.remove("d-none");
  slideItemsContainer[selectedSlide].classList.add("d-block");

  img.setAttribute(
    "src",
    `assets/images/page-2 (SOC as a Staffing)/section-5/img-${
      selectedSlide + 1
    }/img-${selectedSlide + 1}.svg`
  );
}
