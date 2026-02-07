const { Router } = require("express");
const authorRouter = Router();

const { getAuthorById, getAuthors,postAuthors } = require('../controllers/authController');


// ... other route handlers
authorRouter.get("/:authorId", getAuthorById);
authorRouter.get("/",getAuthors);
authorRouter.post("/",postAuthors)
module.exports = authorRouter;
