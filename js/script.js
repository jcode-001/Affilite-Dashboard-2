const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.section1');
const pageLink = document.querySelectorAll('.page-link');
const header = document.querySelector("header");

menuBtn.addEventListener('click', ()=>{
    sideBar.classList.add("active");
})
closeBtn.addEventListener('click', ()=>{
    sideBar.classList.remove("active");
})

pageLink.forEach((links)=>{
    links.addEventListener('click', ()=>{
        sideBar.classList.remove("active");
    })
})


let lastScroll = 0;

window.addEventListener("scroll", ()=>{
    if(scrollY > lastScroll){
        header.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
    }

    lastScroll = window.scrollY;
});


// Greetings
var greetingElement = document.querySelector(".greeting");
var talkElement = document.querySelector(".quote");

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
// greetingElements.forEach(function (element) {
//   element.textContent = greeting;
// });
// talkElements.forEach(function (element) {
//   element.textContent = talk;
// });

greetingElement.textContent = greeting;
talkElement.textContent = talk;