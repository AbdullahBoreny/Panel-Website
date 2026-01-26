const express = require("express");
const cors = require("cors");
const app = express();

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use(cors()); // allow React to call backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);
app.use("/api", indexRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
