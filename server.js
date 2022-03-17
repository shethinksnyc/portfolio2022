const express = require("express");

const app = express();

const PORT = process.env.PORT || 5500;

//  Middleware
app.use(express.static("contactForm.html"));

app.get("/", (req, res) => {
  res.sendFile("/");
});

app.post("/", (req, res) => {
  res.send(__dirname + "contactForm.html");
  console.log("this shit be working yo ");
});

app.listen(PORT, () => {
  console.log("example");
});
