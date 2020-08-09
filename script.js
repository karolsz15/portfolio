// Get the modal
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const modal5 = document.getElementById("myModal5");
const modal6 = document.getElementById("myModal6");


// Get the button that opens the modal
const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const btn3 = document.getElementById("myBtn3");
const btn4 = document.getElementById("myBtn4");
const btn5 = document.getElementById("myBtn5");
const btn6 = document.getElementById("myBtn6");


// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];
const span3 = document.getElementsByClassName("close")[2];
const span4 = document.getElementsByClassName("close")[3];
const span5 = document.getElementsByClassName("close")[4];
const span6 = document.getElementsByClassName("close")[5];


// Get the buttons that close the modals
const closemodal1 = document.getElementsByClassName("closemodal")[0];
const closemodal2 = document.getElementsByClassName("closemodal")[1];
const closemodal3 = document.getElementsByClassName("closemodal")[2];
const closemodal4 = document.getElementsByClassName("closemodal")[3];
const closemodal5 = document.getElementsByClassName("closemodal")[4];
const closemodal6 = document.getElementsByClassName("closemodal")[5];


// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal and reset slideIndex
span1.onclick = function() {
  modal1.style.display = "none";
  slideIndex = 1;
}
closemodal1.onclick = function() {
    modal1.style.display = "none";
    slideIndex = 1;
}

span2.onclick = function() {
    modal2.style.display = "none";
    slideIndex = 1;
}
closemodal2.onclick = function() {
    modal2.style.display = "none";
    slideIndex = 1;
}

span3.onclick = function() {
    modal3.style.display = "none";
    slideIndex = 1;
}
closemodal3.onclick = function() {
    modal3.style.display = "none";
    slideIndex = 1;
}

span4.onclick = function() {
    modal4.style.display = "none";
    slideIndex = 1;
}
closemodal4.onclick = function() {
    modal4.style.display = "none";
    slideIndex = 1;
}

span5.onclick = function() {
    modal5.style.display = "none";
    slideIndex = 1;
}
closemodal5.onclick = function() {
    modal5.style.display = "none";
    slideIndex = 1;
}

span6.onclick = function() {
  modal6.style.display = "none";
  slideIndex = 1;
}
closemodal6.onclick = function() {
  modal6.style.display = "none";
  slideIndex = 1;
}

// When the user clicks anywhere outside of the modal, close it and reset slideIndex
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    slideIndex = 1;
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
    slideIndex = 1;
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
    slideIndex = 1;
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
    slideIndex = 1;
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
    slideIndex = 1;
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
    slideIndex = 1;
  }
} 

// When the user scrolls down 30px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "0.4em 0.4em";
    document.getElementById("navbar").style.fontSize = "0.9em";
  } else {
    document.getElementById("navbar").style.padding = "1em 1.2em";
    document.getElementById("navbar").style.fontSize = "1em";
  }
} 

// SLIDESHOW GALLERY

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides1 = document.getElementsByClassName("mySlides1");
  const slides2 = document.getElementsByClassName("mySlides2");
  const slides3 = document.getElementsByClassName("mySlides3");
  const slides4 = document.getElementsByClassName("mySlides4");
  const slides5 = document.getElementsByClassName("mySlides5");
  const slides6 = document.getElementsByClassName("mySlides6");

  const dots1 = document.getElementsByClassName("dot1");
  const dots2 = document.getElementsByClassName("dot2");
  const dots3 = document.getElementsByClassName("dot3");
  const dots4 = document.getElementsByClassName("dot4");
  const dots5 = document.getElementsByClassName("dot5");
  const dots6 = document.getElementsByClassName("dot6");

  if (n > slides1.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides1.length}

  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}

  if (n > slides3.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides3.length}

  if (n > slides4.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides4.length}

  if (n > slides5.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides5.length}

  if (n > slides6.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides6.length}

  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }

  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }

  slides1[slideIndex-1].style.display = "block";
  slides2[slideIndex-1].style.display = "block";
  slides3[slideIndex-1].style.display = "block";
  slides4[slideIndex-1].style.display = "block";
  slides5[slideIndex-1].style.display = "block";
  slides6[slideIndex-1].style.display = "block";

  //Toggle the dots indicators
  dots1[slideIndex-1].className += " active";
  dots2[slideIndex-1].className += " active";
  dots3[slideIndex-1].className += " active";
  dots4[slideIndex-1].className += " active";
  dots5[slideIndex-1].className += " active";
  dots6[slideIndex-1].className += " active";
}

//SECTIONS SLIDE IN with GSAP
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
  trigger: section,
  start: 'top 20%',
}});  
});

//scroll to sections with GSAP
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll(".navbar a").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:0}});
  });
});