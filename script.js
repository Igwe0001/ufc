// Navigation
const hamburger = document.querySelector(".hamburger__container");
const hamburgerItem = document.querySelectorAll(".hamburger__item");
const navUl = document.querySelector("ul");
const title = document.querySelector(".home__link");
const navLinks = document.querySelector(".nav__links");
const icon = document.querySelector(".search > i");
const footerBtn = document.querySelector(".footer__btn");
const searchBox = document.querySelector(".search-box");
const input = document.querySelector("#searchbox-input");

// Navigation
hamburger.addEventListener("click", () => {
  hamburgerItem.forEach((e) => {
    e.classList.toggle("active");
  });
  navUl.classList.toggle("active");
  title.classList.toggle("active");
  navLinks.classList.toggle("active");
});

//Search box
icon.addEventListener("click", () => {
  searchBox.classList.toggle("open");
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  if (searchBox.classList.contains("open")) {
    return icon.classList.replace("fa-magnifying-glass", "fa-xmark");
  }
  icon.classList.replace("fa-xmark", "fa-magnifying-glass");
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

//scroll to top
footerBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// search input
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    console.log(input.value);
    input.value = "";
    searchBox.classList.remove("open");
    hamburger.classList.remove("open");
    searchBox.classList.remove("open");
    icon.classList.replace("fa-xmark", "fa-magnifying-glass");
    navLinks.classList.remove("open");
  }
});
