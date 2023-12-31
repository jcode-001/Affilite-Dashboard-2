"use strict";

const navBar = document.querySelector(".navbar");
const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".close-btn");
const container = document.querySelector("main");
const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (scrollY > lastScroll) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  // lastScroll = window.scrollY;
});

openMenuBtn.addEventListener("click", () => {
  navBar.classList.add("active");
  container.style.opacity = ".2";
  // navBar.style.filter = "brightness(100%)";
});
closeMenuBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
  container.style.opacity = "1";
});

// Greetings
const greetingElement = document.querySelector(".greeting");
const messageElement = document.querySelector(".quote");

// Get the current date and time
const currentDate = new Date();
const currentHour = currentDate.getHours();

// Get the greeting message based on the current time
const body = document.body;
let greeting;
let message;
if (currentHour < 12) {
  greeting = "Good morning";
  message = "Hello Boss, ready to generate Sales Today? Let’s go!";
  body.classList.remove("dark-theme");
} else if (currentHour < 18) {
  greeting = "Good afternoon";
  message = "Hey boss! How is your day going so far?";
  body.classList.remove("dark-theme");
} else {
  greeting = "Good evening";
  message = "Hi there boss, You did good!";
  body.classList.add("dark-theme");
}

greetingElement.textContent = greeting;
messageElement.textContent = message;
