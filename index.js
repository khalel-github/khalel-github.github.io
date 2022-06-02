const displayModal = document.getElementById('displayModal');
const modalImage = document.getElementById('modalImage');

function openDisplay(imageSource){
    modalImage.src = imageSource;
    displayModal.classList.add('is-active');
}

function closeDisplay(){
    displayModal.classList.remove('is-active');
}

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