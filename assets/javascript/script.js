

//section-three
function picture() { 
  var pic = "assets/images/soc main.svg"
  document.getElementById('img-section-3').src = pic.replace('90x90', '225x225');
  document.getElementById('img-section-3').style.display='block';
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

