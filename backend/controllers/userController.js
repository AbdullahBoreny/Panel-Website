const db = require("../db/userdb");
const userRepo = require("../repositories/userRepo");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getUserById(req, res) {
  const { userId } = req.params;

  const user = await userRepo.getUserById(Number(userId));

  res.json(user);
}

async function getUsers(req, res) {
  const { name } = req.params;

  if (name) {
    const user = await userRepo.getUserByName(name);
    if (!user) {
      return res.status(404).json({ message: "no name here" });
    }
  }

  const users = await userRepo.getAll();

  res.json(users);
}

async function postUser(req, res) {
  const newUser = { ...req.body };
  await userRepo.create(newUser);

  res.json({ user: newUser });
}
module.exports = { postUser, getUsers, getUserById };
