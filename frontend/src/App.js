import { useState, useEffect } from "react";

function App() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookTitle, setBookTitle] = useState("");

  // Response & data state
  const [response, setResponse] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  // Fetch authors & books on load
  const fetchAuthors = () =>
    fetch("/api/authors").then(res => res.json()).then(setAuthors);
  const fetchBooks = () =>
    fetch("/api/books").then(res => res.json()).then(setBooks);

  useEffect(() => {
    fetchAuthors();
    fetchBooks();
  }, []);

  // Handle main form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    setResponse(data);
  };

  // Add new author
  const handleAddAuthor = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: authorName }),
    });
    const data = await res.json();
    setAuthorName("");
    fetchAuthors(); // refresh authors list
  };

  // Add new book
  const handleAddBook = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: bookTitle }),
    });
    const data = await res.json();
    setBookTitle("");
    fetchBooks(); // refresh books list
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>{response.message}</h3>
          <p>Name: {response.received.name}</p>
          <p>Email: {response.received.email}</p>
        </div>
      )}

      <hr />

      <h2>Authors</h2>
      <ul>{authors.map(a => <li key={a.id}>{a.name}</li>)}</ul>
      <form onSubmit={handleAddAuthor} style={{ marginBottom: "20px" }}>
        <input
          placeholder="New Author"
          value={authorName}
          onChange={e => setAuthorName(e.target.value)}
        />
        <button type="submit">Add Author</button>
      </form>

      <h2>Books</h2>
      <ul>{books.map(b => <li key={b.id}>{b.title}</li>)}</ul>
      <form onSubmit={handleAddBook}>
        <input
          placeholder="New Book"
          value={bookTitle}
          onChange={e => setBookTitle(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default App;
