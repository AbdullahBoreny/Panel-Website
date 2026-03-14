const pool = require("./pool");

async function getBooks() {
  const result = await pool.query("SELECT * FROM books");

  return result.rows;
}
async function getBookById(bookId) {
  const query = "SELECT * FROM books WHERE id = $1";
  const values = [bookId];

  const { rows } = await pool.query(query, values);

  return rows[0];
}

async function insertBook(book) {
  const query = "INSERT INTO books (title) VALUES ($1) RETURNING *";
  const values = [book.title];

  const { rows } = await pool.query(query, values);

  return rows[0];
}

module.exports = { getBookById, getBooks, insertBook };
