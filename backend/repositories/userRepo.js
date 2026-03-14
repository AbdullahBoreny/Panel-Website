const db = require("../db/userdb");

async function getAll() {
  const users = await db.getUsers();
  if (!users) {
    return res.status(404).send("not found");
  }

  return users;
}
async function getUserById(id) {
  const user = await db.getUserById(id);
  if (!user) {
    throw new CustomNotFoundError("user not found");
  }
  return user;
}
async function create(newUser) {
  const user = await db.insertUser(newUser);
  if (!user) {
    throw new Error("user is required to create a user");
  }
  res.json(user);
}
async function getUserByName(params) {
  const result = await db.getUserByName(params);

  if (!result) {
    return null;
  }
  return result;
}

module.exports = { getAll, getUserById, create, getUserByName };
