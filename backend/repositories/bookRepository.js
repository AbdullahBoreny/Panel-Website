const db = require("../db/bookdb");

async function getAll() {
  const books = await db.getBooks();
  console.log(books);

  return books;
}

async function getById(id) {
  const book = await db.getBookById(id);
  return book || null;
}

async function create(bookData) {
  if (!bookData.title) {
    throw new Error("Title is required to create a book");
  }

  const newBook = await db.insertBook(bookData);

  return newBook;
}

module.exports = { getAll, getById, create };
