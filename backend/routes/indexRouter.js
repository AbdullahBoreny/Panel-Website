const { Router } = require("express");
const path = require("path");
const indexRouter = Router();

const { getUsers,getUserById, postUser } = require("../controllers/indexController");

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});
indexRouter.get("/about", (req, res) => {
  res.send("about");
});
indexRouter.get("/users", getUsers);
indexRouter.get("/users/:userId",getUserById);
indexRouter.post("/users",postUser);
module.exports = indexRouter;
