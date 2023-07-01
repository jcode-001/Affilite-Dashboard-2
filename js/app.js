const toggleBar = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".section-1");
const dropdownBtn = document.querySelectorAll(".profile");

function openMenu() {
  menu.classList.add("active");
}
function closeMenu() {
  menu.classList.remove("active");
}
document.onclick = function (e) {
  if (e.target !== menu && e.target !== toggleBar) {
    menu.classList.remove("active");
  }
}

// Profile
// Attach click event listeners to each toggle button
dropdownBtn.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the corresponding dropdown based on the button's dataset value
    var dropdownId = button.dataset.dropdown;
    var dropdown = document.querySelector('.dropdown' + dropdownId);

    // Toggle the display of the dropdown
    dropdown.classList.toggle('active');
  });
});




// End of profile

toggleBar.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
// document .addEventListener("click", menuTarget);

// Greetings
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
  talk = "Hey boss! How is your going day so far?";
} else {
  greeting = "Good evening";
  talk = "Hi there boss, You did good!";
}

// Display the greeting message in each of the selected elements
greetingElements.forEach(function (element) {
  element.textContent = greeting;
});
talkElements.forEach(function (element) {
  element.textContent = talk;
});

