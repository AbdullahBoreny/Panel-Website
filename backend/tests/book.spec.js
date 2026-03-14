const request = require("supertest");
const app = require("../app"); // Import your real app configuration
const bookRepo = require("../repositories/bookRepository");

// Mock the repository so we don't need a real DB for this test
jest.mock("../repositories/bookRepository");

describe("Book Integration Tests", () => {
  // Clear mocks before each test to prevent state leak
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /api/books - should create a new book", async () => {
    const mockBook = { id: 1, title: "Clean Code" };
    bookRepo.create.mockResolvedValue(mockBook);

    const res = await request(app)
      .post("/api/books")
      .send({ title: "Clean Code" });

    expect(res.statusCode).toBe(201);
    expect(res.body.book).toEqual(mockBook);
    expect(res.body.message).toBe("Book added!");
  });

  test("GET /api/books/:bookId - should return 404 if book not found", async () => {
    bookRepo.getById.mockResolvedValue(null);

    const res = await request(app).get("/api/books/999");

    expect(res.statusCode).toBe(404);

    // Change 'error' to 'message' to match your app.js
    expect(res.body.message).toBeDefined();
    expect(res.body.message).toBe("BOOK NOT FOUND");
  });
});
