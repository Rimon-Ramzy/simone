let typing = new Typed(".typing", {
  strings: ["Simone Olivie", "a Developer", "a Designer", "a Photographer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})

// Bars (Show Responsive Menu)
let barsIcon = document.querySelector(".bar")
let closeIcon = document.querySelector(".close")
let linksNav = document.querySelector("nav .links-responsive")
// console.log(linksNav);
barsIcon.addEventListener("click", () => {
  linksNav.style.height = "388px";
  closeIcon.style.display = "block"
  barsIcon.style.display = "none"
})
closeIcon.addEventListener("click", () => {
  linksNav.style.height = "0";
  closeIcon.style.display = "none"
  barsIcon.style.display = "block"
})

let navBar = document.querySelector("nav")
window.addEventListener("scroll", () => {
  if (scrollY > 300) {
    navBar.style.position = "fixed"
    navBar.style.top = "0"
    navBar.style.backgroundColor = "#333"
  } else {
    navBar.style.position = "absolute"
    navBar.style.top = "0"
    navBar.style.backgroundColor = "transparent"
  }
})


let knowSection = document.getElementById("know");
window.addEventListener("scroll", () => {
  let offsetTop = knowSection.offsetTop
  let outerHeight = knowSection.offsetHeight
  let windowHeight = this.innerHeight
  let windowScrollTop = this.pageYOffset
  if (windowScrollTop > (outerHeight + offsetTop - windowHeight)) {
    let allKnow = document.querySelectorAll("#know #num")
    allKnow.forEach(el => {
      for (let i = 1; i <= el.dataset.num; i++) {
        el.innerHTML = `${i}+`
      }
    })
  }
})


// skills progress
let skillProgress = document.querySelectorAll(".skill-progress span")
skillProgress.forEach(skill => {
  skill.style.width = skill.dataset.progress
  skill.parentElement.parentElement.querySelector(".skill-pers").innerHTML = skill.dataset.progress
})


// Portfolio Section
let portfolioWrapper = document.querySelector(".portfolio-wrapper-all .row")
console.log(portfolioWrapper);
let portfolioWrapperAll = document.querySelectorAll(".portfolio-wrapper-all img")
let portfolioWrapperAllArr = [...portfolioWrapperAll]
let portfolioLinks = document.querySelectorAll(".portfolio-links a")

portfolioLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.parentElement.parentElement.querySelectorAll(".active").forEach(e => {
      e.classList.remove("active")
    })
    e.target.classList.add("active")
  })
})
let v = portfolioWrapper.innerHTML
document.getElementById("all").addEventListener("click", ()=> {
  portfolioWrapper.innerHTML = v
})
document.getElementById("design").addEventListener("click", ()=> {
  // scaleOut(0,2,3,5)
  scaleOut(0, 1, 2, 3, 4, 5, 6)
    portfolioWrapper.innerHTML =
      `
    <div class="col-md-4">
      <img src="images/project-2.jpg" alt="" class="mb-3">
    </div>
    <div class="col-md-4">
      <img src="images/project-5.jpg" alt="" class="mb-3">
    </div>
    <div class="col-md-4">
      <img src="images/project-7.jpg" alt="">
    </div>
    `
})
document.getElementById("brand").addEventListener("click", ()=> {
  scaleOut(1,2,4,6)
    portfolioWrapper.innerHTML =
      `
    <div class="col-md-4">
      <img src="images/project-1.jpg" alt="" class="mb-3">
    </div>
    <div class="col-md-4">
      <img src="images/project-4.jpg" alt="" class="mb-3">
    </div>
    <div class="col-md-4">
      <img src="images/project-6.jpg" alt="">
    </div>
    `
})
document.getElementById("photos").addEventListener("click", ()=> {
  scaleOut(0,1,5,4)
    portfolioWrapper.innerHTML =
      `
    <div class="col-md-4">
      <img src="images/project-3.jpg" alt="" class="mb-3">
    </div>
    <div class="col-md-4">
      <img src="images/project-4.jpg" alt="" class="mb-3">
    </div>
    <div class="col-md-4">
      <img src="images/project-7.jpg" alt="">
    </div>
    `
})
function scaleOut(...index) {
  for (let i = 0; i < index.length; i++) {
    portfolioWrapperAll[index[i]].style.transform = 'scale(0)'
  }
}
function scaleIn(...index) {
  for (let i = 0; i < index.length; i++) {
    portfolioWrapperAll[index[i]].style.transform = 'scale(100%)'
  }
}