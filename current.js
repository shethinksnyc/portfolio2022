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
const fullPage = document.querySelector(".tile-back");

function fullScreenHandler(event) {
  // request fullscreen method on button click to back of tile
  fullPage.requestFullscreen();
}

// event listener for back of tile screen change
fullPage.addEventListener("fullscreenchange", hideShowHandler);

function hideShowHandler(event) {
  // select all parent div
  const parent = document.querySelector(".tiles-container");
  // select video
  const video = document.querySelector("#full-page-background-video");
  // toggle hidden class
  parent.classList.toggle("hidden-bg");
  // unhide hidden class
  video.classList.toggle("hidden-bg");
}
