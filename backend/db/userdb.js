const pool = require("./pool");

async function getUsers() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}
async function insertUser(user) {
  const query = "INSERT INTO users (name,password) VALUES ($1, $2) RETURNING*";
  const values = [user.username, user.password];
  const { rows } = await pool.query(query, values);
  return rows[0];
}


async function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = $1";
  const values = [userId];

  const { rows } = await pool.query(query, values);

  return rows[0];
}
async function getUserByName(userName) {
  const query = "SELECT * FROM users WHERE name ILIKE $1";
  const values = [`%${userName}%`];

  const { rows } = await pool.query(query, values);
  return rows[0];
}
module.exports = {
  getUsers,
  getUserById,
  insertUser,
  getUserByName,
};
