// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];
let books = [
  { id: 1, title: "Pride and Prejudice" },
  { id: 2, title: "To Kill a Mockingbird" },
];

async function getBookById(bookId) {
  
  return books.find(book => book.id === bookId);
};
async function getAuthorById(authorId) {
  
  return authors.find(author => author.id === authorId);
};
async function getAuthors() {
  return authors;
}

async function getBooks() {
  return books;
}

module.exports = { getBooks,getAuthorById,getAuthors, getBookById };
