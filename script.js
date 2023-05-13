// Navigation
const hamburger = document.querySelector(".hamburger__container");
const hamburgerItem = document.querySelectorAll(".hamburger__item");
const navUl = document.querySelector("ul");
const title = document.querySelector(".home__link");
const navLinks = document.querySelector(".nav__links");
const icon = document.querySelector(".search > i");

console.log(icon);

// Navigation
hamburger.addEventListener("click", () => {
  hamburgerItem.forEach((e) => {
    e.classList.toggle("active");
  });
  navUl.classList.toggle("active");
  title.classList.toggle("active");
  navLinks.classList.toggle("active");
});

//Sticky header

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  title.classList.toggle("sticky", window.scrollY > 0);
  navLinks.classList.toggle("sticky", window.scrollY > 0);
  icon.classList.toggle("sticky", window.scrollY > 0);
  hamburgerItem.forEach((e) => {
    e.classList.toggle("sticky", window.scrollY > 0);
  });
});
