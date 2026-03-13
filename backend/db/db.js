const pool = require("./pool");

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];
const books = [
  { id: 1, title: "Pride and Prejudice" },
  { id: 2, title: "To Kill a Mockingbird" },
  { id: 3, title: "To Kill a" },
];


async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  console.log(result.rows);
  return result.rows;
}
async function insertUser(user) {
  await pool.query("INSERT INTO users (name,password) VALUES ($1, $2)", [
    user.username,
    user.password,
  ]);
}


async function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}
async function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = $1";
  const values = [userId];
  console.log(values);

  const { rows } = await pool.query(query, values);

  return rows[0]
}
async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}
async function getAuthors() {
  return authors;
}

async function getBooks() {
  return books;
}

module.exports = {
  getAuthors,
  getUsers,
  getBooks,
  getAuthorById,
  getUserById,
  getBookById,
  insertUser,
};
