//  Mobile Hmaburger Menu toggle
// select burger container
const mobileMenu = document.querySelector(".hamburger");

// when screen is mobile size (668max) hide burger menu
// hide navbar items
//onclick animate bar --x--
// drop down quarter srceen menu
// on click of menu items ---> direct to appropriate file
// on click in mobile to close

// full screen on tile button click

// Select button element
const fullScreenButton = document.querySelector("#full-screen");
// Adds event listener to button for click + callback function
fullScreenButton.addEventListener("click", fullScreenHandler);
// Selects container with all elements for back of tile
const fullPage = document.querySelector("#fullPage");

function fullScreenHandler(event) {
  // request fullscreen method on button click to back of tile
  fullPage.requestFullscreen();
}

// check if full screen mode is true
// hide one class
// show other class

// event listener for back of tile screen change
fullPage.addEventListener("fullscreenchange", hideShowHandler);

// select all elements to hide
const wholeContainer = document.querySelector("#fullPage");

// select all classes in back of tile container--> DOM tokenList
const classes = wholeContainer.classList;
console.log(classes);

function hideShowHandler(event) {
  // select hidden class of video
  classes.toggle("hidden-bg");
}

// on full page mode
// hide container of back of tile

// show container with button and background as video
// on click of button exit full- screen or esc

// const backgroundFullScreenVideo = document.querySelector(
//   "#full-page-background-video"
// );

// function checkFullScreen() {}

// document.addEventListener("fullscreenchange", function () {});

// const backSideInFull = document.querySelector("#fullPage");

//   if (backSideInFull) {
//     // toggle hidden class with back of tile
//     backgroundFullScreenVideo.classList.toggle("visible");

// add view change listener to back tile
// on view change
//
// let btn = document.querySelector("#full-screen");
// let div = document.querySelector("full-screen-video-bg");

// btn.addEventListener("fullscreenchange", () => {
//   if (div.style.display === "none") {
//     div.style.btn = "block";
//   } else {
//     div.style.display === "none";
//   }
// });
