// eslint-disable-next-line no-undef
const db = require("../db/db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getUserById(req, res) {
  const { userId } = req.params;

  const user = await db.getUserById(Number(userId));

  if (!user) {
    throw new CustomNotFoundError("user not found");
  }

  console.log(user);
  res.send(user);
}

async function getUsers(req, res) {
  const users = await db.getUsers();
  console.log(users);

  if (!users) {
    res.status(400).send("not found");
    return;
  }
  res.json(users);
}
async function postUser(req, res) {
  const users = await db.getUsers();
  const newUser = { ...req.body };
  await db.insertUser(newUser);
  console.log(newUser);
  
  res.json({ user: newUser });
}
module.exports = { postUser, getUsers, getUserById };
