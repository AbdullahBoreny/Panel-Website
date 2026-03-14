const authorRepo = require("../repositories/authorRepository");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAuthorById(req, res) {
  const author = await authorRepo.getById(Number(req.params.authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }
  res.send(author);
}

async function getAuthors(req, res) {
  const authors = await authorRepo.getAll();
  // Usually, an empty array is still a 200 OK, but we'll keep your 404 logic
  if (!authors || authors.length === 0) {
    return res.status(404).send("Authors not found");
  }
  res.send(authors);
}

async function postAuthors(req, res) {
  // The controller just passes the data to the repo
  const newAuthor = await authorRepo.create(req.body);
  
  res.status(201).json({ 
    message: "Author added!", 
    author: newAuthor 
  });
}

module.exports = { getAuthorById, getAuthors, postAuthors };