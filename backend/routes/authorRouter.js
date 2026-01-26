const { Router } = require("express");
const authorRouter = Router();

let authors = [
  { id: 1, name: "Author 1" },
  { id: 2, name: "Author 2" },
];

authorRouter.get("/", (req, res) => {
  res.json(authors); // send all authors
});

authorRouter.post("/", (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.json({ message: "Author added!", author: newAuthor });
});

module.exports = authorRouter;
