const form = document.querySelector("#input-fields");
const message = document.querySelector("#message");
const url = "http://127.0.0.1:3000";

const nombre = document.querySelector("#name");
const email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // send request to API using fetch

  fetch(url, {
    body: JSON.stringify({ nombre, email, message }),
    method: "POST",
  }).then(
    // {'nombre':'Diana'} ,{}
    (response) => {
      if (response.ok) {
        const contactForm = document.querySelector(".contact-box-container");
        const emailSentMessage = document.querySelector(".request");
        emailSentMessage.toggleAttribute("hidden");
        contactForm.toggleAttribute("hidden");
      }
    }
  );
});
