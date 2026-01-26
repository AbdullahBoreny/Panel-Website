const { Router } = require("express");
const bookRouter = Router();

let books = [
  { id: 1, title: "Pride and Prejudice" },
  { id: 2, title: "To Kill a Mockingbird" },
];

bookRouter.get("/", (req, res) => {
  res.json(books); 
});

bookRouter.post("/", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json({ message: "Book added!", book: newBook });
});

module.exports = bookRouter;
