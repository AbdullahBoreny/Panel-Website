const express = require("express");
const path = require("path");

const app = express();
app.get("/", (req, res) => {
  console.log("index is !");

  res.send("Hello, world!");
});
app.get("/about", (req, res) => {
  console.log("about is requested!");
  res.sendFile(path.join(process.cwd(), "index.html"));
});
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
