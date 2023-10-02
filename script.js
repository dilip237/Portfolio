/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]')
console.log(sections);
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)
/* ----- SCROLL TOP ----- */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
if (window.scrollY >= 10) {
  header.classList.add("active");
  goTopBtn.classList.add("active");
} else {
  header.classList.remove("active");
  goTopBtn.classList.remove("active");
}
});