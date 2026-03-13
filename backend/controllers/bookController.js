const CustomNotFoundError = require("../errors/CustomNotFoundError");
// eslint-disable-next-line no-undef
const db = require("../db/bookdb");

async function getBookById(req, res) {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));
  console.log(book);

  if (!book) {
    res.send(`book not found`);
    throw new CustomNotFoundError("BOOK NOT FOUND");
  }

  res.json(book);
}
async function getBooks(req, res) {
  const books = await db.getBooks();
  console.log(books);
  if (!books) {
    throw new CustomNotFoundError(`BOOKS not found`);
  }

  res.json(books);
}
async function postBooks(req, res) {
  const books = await db.getBooks();

  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json({ message: "Book added!", book: newBook });
}
module.exports = { getBooks, getBookById, postBooks };
