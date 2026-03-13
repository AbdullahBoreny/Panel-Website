const authorRouter = require("./authorRouter");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", authorRouter);

test("author route works", (done) => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect([
      { id: 1, name: "Bryan" },
      { id: 2, name: "Christian" },
      { id: 3, name: "Jason" },
    ])
    .expect(200, done);
});
