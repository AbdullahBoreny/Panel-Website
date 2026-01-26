const { Router } = require("express");
const bookRouter = Router();

let books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" }
];

// GET all books
bookRouter.get("/", (req, res) => {
  res.json({
    status: "success",
    count: books.length,
    data: books
  });
});

// POST new book
bookRouter.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ status: "fail", message: "Title is required" });
  }

  const newBook = { id: books.length + 1, title };
  books.push(newBook);

  res.status(201).json({
    status: "success",
    data: newBook
  });
});

module.exports = bookRouter;
