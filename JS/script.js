const TypeWriter = function (txtElement, words, wait = 3000) {
  // assign properties using this key word

  // text element that is passed in
  this.txtElement = txtElement;
  // words that are passed in
  this.words = words;
  // what is in the area being typed
  this.txt = "";
  // words are formatted as array- start at 0
  this.wordIndex = 0;
  // make sure wait is int , base param of 10
  this.wait = parseInt(wait, 10);
  // type method
  this.type();
  // set state
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
  // get current Index of word
  const current = this.wordIndex % this.words.length;
  // get full text of current word
  const fullTxt = this.words[current];
  // check if in Deleting state
  if (this.isDeleting) {
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // output every half sec
  // insert txt into element
  this.txt.innerHTML = `<span class="txt">${this.txt}</span>`;

  // each time char is added or deleted
  setTimeout(() => this.type(), 500);
};

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Initialize App
function init() {
  // grab element
  const txtElement = document.querySelector(".txt-type");
  // grab words need to parse otherwise is string
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  // grab wait
  const wait = txtElement.getAttribute("data-wait");
  // initialize typewriter

  new TypeWriter(txtElement, words, wait);
}

// Navigation Bar

// select button icon
const navToggle = document.querySelector(".navbar_toggle");

//select ul class
const navLinks = document.querySelector(".main__nav");

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show_nav");
});
