var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop)

var homeBtn = document.getElementById("homeBtn")

function backToIndex() {
    window.location.href = "index.html";
}
homeBtn.addEventListener("click", backToIndex)

let slideIndex = [1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}



const mySlides5_modal = document.getElementById('mySlides5_modal');
const mySlides6_modal = document.getElementById('mySlides6_modal');
const mySlides7_modal = document.getElementById('mySlides7_modal');
const mySlides8_modal = document.getElementById('mySlides8_modal');

//
function mySlides5_open(){
  mySlides5_modal.classList.add('is-active');
}

function mySlides5_close(){
  mySlides5_modal.classList.remove('is-active');
}
//

function mySlides6_open(){
  mySlides6_modal.classList.add('is-active');
}

function mySlides6_close(){
  mySlides6_modal.classList.remove('is-active');
}

function mySlides7_open(){
  mySlides7_modal.classList.add('is-active');
}

function mySlides7_close(){
  mySlides7_modal.classList.remove('is-active');
}
//
function mySlides8_open(){
  mySlides8_modal.classList.add('is-active');
}

function mySlides8_close(){
  mySlides8_modal.classList.remove('is-active');
}

var img_1 = document.getElementById('img_1');
var img_2 = document.getElementById('img_2');
var img_3 = document.getElementById('img_3');
var img_4 = document.getElementById('img_4');
var img_5 = document.getElementById('img_5');
var img_6 = document.getElementById('img_6');

var img_7 = document.getElementById('img_7');
var img_8 = document.getElementById('img_8');
var img_9 = document.getElementById('img_9');
var img_10 = document.getElementById('img_10');
var img_11 = document.getElementById('img_11');
var img_12 = document.getElementById('img_12');
var img_13 = document.getElementById('img_13');

img_1.addEventListener("click", mySlides5_open)
img_2.addEventListener("click", mySlides5_open)
img_3.addEventListener("click", mySlides6_open)
img_4.addEventListener("click", mySlides6_open)
img_5.addEventListener("click", mySlides6_open)
img_6.addEventListener("click", mySlides6_open)

img_7.addEventListener("click", mySlides7_open)
img_8.addEventListener("click", mySlides7_open)
img_9.addEventListener("click", mySlides7_open)
img_10.addEventListener("click", mySlides8_open)
img_11.addEventListener("click", mySlides8_open)
img_12.addEventListener("click", mySlides8_open)
img_13.addEventListener("click", mySlides8_open)
