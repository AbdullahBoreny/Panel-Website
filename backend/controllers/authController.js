const CustomNotFoundError = require("../errors/CustomNotFoundError");
// eslint-disable-next-line no-undef
const db = require("../db/db");

async function getAuthorById(req, res) {
  const { authorId } = req.params;


  const author = await db.getAuthorById(Number(authorId));
  
  
  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }


  console.log(author);
  res.send(author);
}

async function getAuthors(req, res) {
  const authors = await db.getAuthors();
  if (!authors) {
    res.status(404).send("Authors not found");
    return;
  }
  res.send(authors);
}

async function postAuthors(req, res) {
  const authors = await db.getAuthors();
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  console.log(authors);
  
  res.json({ message: "authors added!", author: newAuthor });
}


module.exports = { getAuthorById, getAuthors, postAuthors };
