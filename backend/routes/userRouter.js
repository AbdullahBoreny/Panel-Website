const { Router } = require("express");
const path = require("path");
const userRouter = Router();

const {
  getUsers,
  getUserById,
  postUser,
} = require("../controllers/userController");

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});
userRouter.get("/about", (req, res) => {
  res.send("about");
});
userRouter.get("/users", getUsers);
userRouter.get("/users/:userId", getUserById);
userRouter.post("/users", postUser);
module.exports = userRouter;
