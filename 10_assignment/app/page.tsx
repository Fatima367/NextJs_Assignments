"use client";
import { useState, useEffect } from "react";

// Book type
type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  image: any;
};

export default function Page() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [available, setAvailable] = useState("");
  const [image, setImage] = useState<File | null> (null);
  const [editId, setEditId] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string>(""); 


  // Fetch books from the API
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("/api/books");
    const data = await response.json();
    setBooks(data.books);
  };

  const addBook = async () => {
    try {
      const newBook = {
        title,
        author,
        genre,
        available: available === "true", // Convert to boolean
        image: "", // Placeholder; this would need actual file upload handling
      };
      const response = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        fetchBooks();
        resetForm();
      } else {
        console.error("Failed to add book:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const editBook = async (id: string) => {
    try {
      const updatedBook = {
        title,
        author,
        genre,
        available: available === "true", // Convert to boolean
        image: currentImage, // Placeholder; this would need actual file upload handling
      };

      const response = await fetch(`/api/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
      });
      if (response.ok) {
        fetchBooks();
        resetForm();
      } else {
        console.error("Failed to edit book:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const deleteBook = async (id: string) => {
    await fetch(`/api/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  const handleEditClick = (book: Book) => {
    setEditId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setAvailable(book.available.toString());
    setCurrentImage(book.image);
    setImage(null); // Clear file input value for security
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setGenre("");
    setAvailable("");
    setImage(null);
    setEditId(null);
    setCurrentImage("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Online Bookstore
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Book Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm flex flex-col items-start"
            >
              <img
                src={book.image || "https://via.placeholder.com/150"}
                alt={book.title}
                className="h-40 w-full object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-sm text-gray-500">Genre: {book.genre}</p>
              <p
                className={`text-sm font-semibold mt-2 ${
                  book.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {book.available ? "Available" : "Not Available"}
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditClick(book)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {editId ? "Edit Book" : "Add a Book"}
        </h2>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          <input
            type="text"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
            placeholder="Available (true/false)"
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          {currentImage && editId && (
            <img src={currentImage} alt="Current Book Cover" className="w-20 h-20 rounded" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded w-1/2"
          />
          <button
            onClick={() => {
              editId ? editBook(editId) : addBook();
            }}
            className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
          >
            {editId ? "Update Book" : "Add Book"}
          </button>
          {editId && (
            <button onClick={resetForm} className="bg-gray-400 text-white p-2 rounded font-semibold hover:bg-gray-500">
              Cancel Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
