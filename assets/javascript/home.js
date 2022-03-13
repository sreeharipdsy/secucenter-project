
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


//type-write-animation
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
};

//section-three
function showLine() {
  document.getElementById('LineOne').style.visibility="visible";
  document.getElementById('LineTwo').style.visibility="visible";
  document.getElementById('LineThree').style.visibility="visible";
  document.getElementById('LineFour').style.visibility="visible";
  document.getElementById('LineFive').style.visibility="visible";
  document.getElementById('LineSix').style.visibility="visible";
  document.getElementById('LineSeven').style.visibility="visible";
  document.getElementById('LineEight').style.visibility="visible";
}
function showIcon() {
  document.getElementById('icon-1').style.visibility="visible";
  document.getElementById('icon-2').style.visibility="visible";
  document.getElementById('icon-3').style.visibility="visible";
  document.getElementById('icon-4').style.visibility="visible";
  document.getElementById('icon-5').style.visibility="visible";
  document.getElementById('icon-6').style.visibility="visible";
  document.getElementById('icon-7').style.visibility="visible";
  document.getElementById('icon-8').style.visibility="visible";
}

//section-seven
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





