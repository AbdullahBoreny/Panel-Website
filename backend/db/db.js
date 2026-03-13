const pool = require("./pool");


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

module.exports = {
  getUsers,
  getUserById,
  insertUser,
};
