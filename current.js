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
function fullScreenHandler(event) {
  if (!document.fullScreenButton) {
    fullPage.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
}

// on full page mode
// hide container of back of tile

// show container with button and background as video
// on click of button exit full- screen or esc

const fullPage = document.querySelector("#fullPage");
const fullScreenButton = document.querySelector("#full-screen");

fullScreenButton.addEventListener("click", fullScreenHandler);

document.addEventListener("fullscreenchange", function () {
  const backSideInFull = document.querySelector("#fullPage");

  if (backSideInFull) {
  }
});

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
