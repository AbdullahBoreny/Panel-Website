const CustomNotFoundError = require("../errors/CustomNotFoundError");
const bookRepo = require("../repositories/bookRepository");

async function getBookById(req, res, next) { // Add next here
  try {
    const { bookId } = req.params;
    const book = await bookRepo.getById(Number(bookId));

    if (!book) {
      throw new CustomNotFoundError("BOOK NOT FOUND");
    }

    res.json(book);
  } catch (err) {
    next(err); // This "pushes" the error to your app.use((err, req, res, next)...)
  }
}
async function getBooks(req, res) {
  const books = await bookRepo.getAll();

  if (!books || books.length === 0) {
    throw new CustomNotFoundError(`BOOKS not found`);
  }

  res.json(books);
}

async function postBooks(req, res) {
  const newBook = await bookRepo.create(req.body);

  res.status(201).json({
    message: "Book added!",
    book: newBook,
  });
}

module.exports = { getBooks, getBookById, postBooks };
