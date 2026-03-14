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
// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

module.exports = app;
