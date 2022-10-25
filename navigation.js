"use strict";

const hamburger = document.querySelector(".navigation__hamburger");
const header = document.querySelector(".header");
const navMenu = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
