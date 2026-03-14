
const express = require("express");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");
const path = require("node:path");
const PORT = process.env.PORT || 8080;


const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const birds = require("./routes/birds");
app.use(cors()); // allow React to call backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/api/birds", birds);
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);
app.use("/api", indexRouter);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
