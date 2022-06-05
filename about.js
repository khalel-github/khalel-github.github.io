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
  window.location.href="index.html";
}
homeBtn.addEventListener("click", backToIndex)



var githubBtn = document.getElementById("githubBtn")

function goToGitHub() {
  window.location.href="https://github.com/khalel-github";
}
githubBtn.addEventListener("click", goToGitHub)




var linkedinBtn = document.getElementById("linkedinBtn")

function goToLinkedIn() {
  window.location.href="https://www.linkedin.com/in/justine-khalel-rubiano-b5b078237/";
}
linkedinBtn.addEventListener("click", goToLinkedIn)