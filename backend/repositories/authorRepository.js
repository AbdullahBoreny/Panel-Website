// authorRepository.js
let authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getAll() {
  return authors;
}

async function getById(id) {
  return authors.find(author => author.id === id);
}

async function create(data) {
  const newAuthor = { id: authors.length + 1, ...data };
  authors.push(newAuthor);
  return newAuthor;
}

// For your tests!
async function reset() {
  authors = [{ id: 1, name: "Bryan" }, { id: 2, name: "Christian" }, { id: 3, name: "Jason" }];
}

module.exports = { getAll, getById, create, reset };