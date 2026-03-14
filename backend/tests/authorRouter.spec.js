const authorRouter = require("../routes/authorRouter");

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
test("testing route works", (done) => {
  request(app)
    .post("/")
    .type("form")
    .send({ name: "hey" })
    .then(() => {
      request(app)
        .get("/")
        .expect(res => {
          // Check if the last item is what we just added
          const lastAuthor = res.body[res.body.length - 1];
          if (lastAuthor.name !== "hey") throw new Error("Name mismatch");
          // Or check the total length
          if (res.body.length !== 4) throw new Error("Length mismatch");
        })
        .expect(200, done);
    });
});