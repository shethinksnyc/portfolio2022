"use strict";
const express = require("express");
const { sendStatus } = require("express/lib/response");
const app = express();

app.listen(3000, () => {
  console.log("yurrrrr!");
});

app.post("/", (req, res) => {
  console.log("this works...");
  res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

  // send email
  res.sendStatus(200);
});
