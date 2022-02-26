


//MOBILE-NAVIGATION
(function() {
  "use strict"; 

  //Easy selector helper function  
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  //Easy event listener function
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  //Easy on scroll event listener 
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }  
  //Navbar links active state on scroll
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive) 
  //Mobile nav toggle
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  }) 
})()


//section-three
//function picture() { 
//var pic = "assets/images/page-1 (Home)/section-3/soc-main.svg"
//document.getElementById('img-section-3').src = pic.replace('90x90', '225x225');
//document.getElementById('img-section-3').style.display='block';
//}


//section-seven-page-1 & section-five-page-3 
document.getElementById("target-me").open = true;
const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
//image-changer
function ImgChanger(i) {
  document.getElementById("outcomes-img").setAttribute("src", `assets/images/page-1 (Home)/section-7/img-S7/image-${i}/img-${i}.svg`);
}



//section-five-page-3-desktop
function ImgChangerTwo(i) {
    document.getElementById("outcomes-img-two").setAttribute("src", `assets/images/page-3 (SOC as a Service)/section-5/desktop/image-${i}.svg`);
}



//section-five-page-two


//section-five--page-2

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-caption");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
