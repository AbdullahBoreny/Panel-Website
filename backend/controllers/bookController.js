
// eslint-disable-next-line no-undef
const db = require("../db");

async function getBookById(req, res) {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));
  console.log(book);

  if (!book) {
    res.status(404).send("Book not found");
    return;
  }

  res.json(book);
}
async function getBooks(req, res) {
  const book = await db.getBooks();
  console.log(book);
  if (!book) {
    res.status(404).send("book not found");
    return;
  }
  const response = book
    .map((book) => `Book Title: ${book.title}, Book Id: ${book.id}`)
    .join("<br>");

  res.json(book);
}
async function postBooks(req, res) {
  const books = await db.getBooks();

  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json({ message: "Book added!", book: newBook });
}
module.exports = { getBooks, getBookById, postBooks };
