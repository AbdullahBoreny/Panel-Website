const { Router } = require("express");
const authorRouter = Router();

const { getAuthorById, getAuthors } = require('../controllers/authController');


// ... other route handlers
authorRouter.get("/:authorId", getAuthorById);
authorRouter.get("/",getAuthors);
module.exports = authorRouter;
