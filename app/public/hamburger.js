

function toggleNav(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// locate hamburger menu
let hamburger = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector(".nav-link");

hamburger.addEventListener("click", toggleNav)