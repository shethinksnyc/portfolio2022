const url = "http://philosophy-quotes-api.glitch.me/quotes";

const backUpQuotes = [
  {
    source: "René Descartes",
    quote: "Except our own thoughts, there is nothing absolutely in our power.",
  },
  {
    source: "Henry David Thoreau",
    quote:
      "How vain it is to sit down to write when you have not stood up to live.",
  },
  {
    source: "Jean-Paul Sartre",
    quote: "There may be more beautiful times, but this one is ours.",
  },

  {
    source: "Henry David Thoreau",
    quote: "All good things are wild and free.",
  },
];

// select button on in fetch HTML

const fetchButton = document.querySelector("#fetch");

// add event Listener for click of button
fetchButton.addEventListener("click", fetchAPI);

// call back function for event Handler

function fetchAPI(data) {
  // select key --> quote
  const quotes = document.querySelector("#quote");

  // select value --> author
  const authors = document.querySelector("#author");

  // make fetch request
  // with path(endpoint) url
  fetch(url)
    .then((response) => {
      // if  response ok
      if (response.ok) {
        // handle response data
        //then handle response --json()
        const stuff = response.json().then((stuff) => {
          // append -- replace quotes plus authors with fetched data --innerHTML?
          // stuff = [{}, {}, {}]

          //set min and max to length of array of obj
          const min = 0;
          const max = stuff.length - 1;
          // generate random
          const random = parseInt(Math.random() * (max - min) + min);
          // append random quote to html div
          const randomQuote = stuff[random];
          quotes.innerHTML = randomQuote.quote;

          // append author of random quote
          authors.innerHTML = randomQuote.source;
        });
      } else {
        // set min and max for backup quotes
        const min = 0;
        const max = backUpQuotes.length - 1;
        // set random
        const random = parseInt(Math.random() * (max - min) + min);
        const randomQuote = backUpQuotes[random];
        quotes.innerHTML = randomQuote.quote;
        authors.innerHTML = randomQuote.source;
      }
    })
    // then handle error ---catch
    .catch((err) => {
      console.log("not working");
    });
}
