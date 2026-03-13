const CustomNotFoundError = require("../errors/CustomNotFoundError")
const { Router } = require("express");
const authorRouter = Router();

const { getAuthorById, getAuthors,postAuthors } = require('../controllers/authController');


authorRouter.get("/:authorId", getAuthorById);
authorRouter.get("/",getAuthors);
authorRouter.post("/",postAuthors)

module.exports = authorRouter;
