const { Router } = require("express");
const authorRouter = Router();

let authors = [
  { id: 1, name: "Mohammad" },
  { id: 2, name: "Abdullah" },
];

authorRouter.get("/", (req, res) => {
  res.json(authors); 
});

authorRouter.post("/", (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.json({ message: "Author added!", author: newAuthor });
});

module.exports = authorRouter;
