const express = require("express");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");
const path = require("node:path");

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const userRouter = require("./routes/userRouter");
const birds = require("./routes/birds");
app.use(cors()); // allow React to call backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/api/birds", birds);
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);
app.use("/api", userRouter);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

module.exports = app;
