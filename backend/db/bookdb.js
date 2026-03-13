const pool = require("./pool");

async function getBooks() {
  const result = await pool.query("SELECT * FROM books");

  return result.rows;
}
async function getBookById(bookId) {
  const query = "SELECT * FROM books WHERE id = $1";
  const values = [bookId];
  console.log(values);

  const { rows } = await pool.query(query, values);

  return rows[0];
}
module.exports = { getBookById, getBooks };
