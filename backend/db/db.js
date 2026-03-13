const pool = require("./pool");

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
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

async function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = $1";
  const values = [userId];
  console.log(values);

  const { rows } = await pool.query(query, values);

  return rows[0];
}
async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}
async function getAuthors() {
  return authors;
}

module.exports = {
  getAuthors,
  getUsers,
  getAuthorById,
  getUserById,
  insertUser,
};
