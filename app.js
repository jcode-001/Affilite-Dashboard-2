const toggleBar = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".section-1");
const dropdownBox = document.querySelector(".drop-down");
const dropdownBtn = document.querySelector(".d-symbol");

function openMenu() {
    menu.classList.add("active");
}
function closeMenu() {
    menu.classList.remove("active");
}
function menuTarget(e) {
    menu.classList.add("active");
    if (e.target !== menu) {
        menu.classList.remove("active");
    }
    else {
        menu.classList.add("active");
    }
}

dropdownBtn.onclick = ()=>{
    dropdownBox.classList.toggle("active");
}

toggleBar.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menu.addEventListener("click", menuTarget);

// Greetings
// Get all elements with the class name "greeting"
var greetingElements = document.querySelectorAll(".greeting");
var talkElements = document.querySelectorAll(".peptalk");

// Get the current date and time
var currentDate = new Date();
var currentHour = currentDate.getHours();

// Get the greeting message based on the current time
var greeting;
var talk;
if (currentHour < 12) {
  greeting = "Good morning";
  talk = "Hello Boss, ready to generate Sales Today? Let’s go!";
} else if (currentHour < 18) {
  greeting = "Good afternoon";
  talk = "Hey boss! How was your day so far?" ;
} else {
  greeting = "Good evening";
  talk = "Hi there boss! the rags should be dropping in..." ;
}

// Display the greeting message in each of the selected elements
greetingElements.forEach(function(element) {
  element.textContent = greeting;
});
talkElements.forEach(function(element) {
  element.textContent = talk ;
});

