import { useState, useEffect } from "react";
import "./App.css";
import "./Form.css";
import "./List.css";

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

  const fetchAuthors = () =>
    fetch("/api/authors").then(res => res.json()).then(setAuthors);
  const fetchBooks = () =>
    fetch("/api/books").then(res => res.json()).then(setBooks);

  useEffect(() => {
    fetchAuthors();
    fetchBooks();
  }, []);

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

  const handleAddAuthor = async (e) => {
    e.preventDefault();
    await fetch("/api/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: authorName }),
    });
    setAuthorName("");
    fetchAuthors();
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: bookTitle }),
    });
    setBookTitle("");
    fetchBooks();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Fullstack Admin Panel</h1>

      <section className="form-section">
        <h2>Main Form</h2>
        <form onSubmit={handleSubmit} className="form">
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
          <div className="response">
            <p><strong>{response.message}</strong></p>
            <p>Name: {response.received.name}</p>
            <p>Email: {response.received.email}</p>
          </div>
        )}
      </section>

      <section className="list-section">
        <h2>Authors</h2>
        <ul className="list">
          {authors.map(a => <li key={a.id}>{a.name}</li>)}
        </ul>
        <form onSubmit={handleAddAuthor} className="form">
          <input
            placeholder="New Author"
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
          />
          <button type="submit">Add Author</button>
        </form>
      </section>

      <section className="list-section">
        <h2>Books</h2>
        <ul className="list">
          {books.map(b => <li key={b.id}>{b.title}</li>)}
        </ul>
        <form onSubmit={handleAddBook} className="form">
          <input
            placeholder="New Book"
            value={bookTitle}
            onChange={e => setBookTitle(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </section>
    </div>
  );
}

export default App;
