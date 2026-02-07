// controllers/authorController.js

// eslint-disable-next-line no-undef
const db = require("../db");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));
  console.log(author);

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(author)
}
async function getAuthors(req, res) {
  const authors = await db.getAuthors();
  console.log(authors);
  if (!authors) {
    res.status(404).send("Authors not found");
    return;
  }
  const response = authors
    .map((author) => `author name: ${author.name}`)
    .join("\n");
  console.log(response);

res.send(authors);
}

async function postAuthors(req, res) {
  const authors = await db.getAuthors();
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.json({ message: "authors added!", author: newAuthor });
}

module.exports = { getAuthorById, getAuthors, postAuthors };
