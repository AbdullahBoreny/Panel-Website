const { Router } = require("express");
const authorRouter = Router();

// In-memory data (replace with DB in real apps)
let authors = [
  { id: 1, name: "Author 1" },
  { id: 2, name: "Author 2" }
];

// GET all authors
authorRouter.get("/", (req, res) => {
  res.json({
    status: "success",
    count: authors.length,
    data: authors
  });
});

// POST new author
authorRouter.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: "fail", message: "Name is required" });
  }

  const newAuthor = { id: authors.length + 1, name };
  authors.push(newAuthor);

  res.status(201).json({
    status: "success",
    data: newAuthor
  });
});

module.exports = authorRouter;
