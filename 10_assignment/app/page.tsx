"use client";
import { useState, useEffect } from "react";
import Navbar from "./navbar/page";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import Footer from "./footer/page";
import Image from "next/image";

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
  const [image, setImage] = useState<File | null>(null);
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
        image: currentImage, // Use the preview URL
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
    setCurrentImage(""); // Reset the image preview
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setCurrentImage(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  return (
    <div className="min-h-screen p-6 font-serif bg-gradient-to-r from-rose-50 via-white 
    to-rose-50">
      <Navbar />

      <div className="max-w-5xl mx-auto bg-transparent p-8 rounded-lg mt-6">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-10">
          Book Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg
              hover:shadow-xl transition hover:scale-105"
            >
              <div className="h-52 w-full">
                <img
                  src={book.image || "https://via.placeholder.com/150"}
                  alt={book.title}
                  className="h-52 w-36 object-cover rounded mb-4 ml-auto mr-auto hover:w-full 
                  transition-all duration-500 ease-in-out -mt-3"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1 mt-4">
                {book.title}
              </h3>
              <p className="text-lg text-gray-600">by {book.author}</p>
              <p className="text-md text-gray-500">Genre: {book.genre}</p>
              <p
                className={`text-md font-semibold mt-2 ${
                  book.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {book.available ? "Available Online" : "Not Available Online"}
              </p>
              <div className="mt-4 flex justify-between -mb-3">
                <button
                  onClick={() => handleEditClick(book)}
                  className="text-blue-600 px-1 py-2 rounded hover:bg-blue-600 
                  hover:text-white"
                >
                  <TbEdit className="w-7 h-7" />
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="text-red-500 px-1 py-2 rounded hover:bg-red-600 
                  hover:text-white"
                >
                  <MdDelete className="w-7 h-7" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10" id="addbook">
          <h2 className="text-2xl font-semibold text-red-900 mb-6">
            {editId ? "Edit Book" : "Add a New Book"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book Title"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none 
                focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author Name"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none 
                focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
                className="border border-gray-300 p-2 rounded w-full focus:outline-none 
                focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Availability</label>
              <select
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none 
                focus:border-red-500"
              >
                <option value="">Select</option>
                <option value="true">Available Online</option>
                <option value="false">Not Available Online</option>
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-4">
              <label className="block text-gray-700 mb-2">
                Book Cover Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-white border border-gray-300 p-2 rounded w-full 
                focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => (editId ? editBook(editId) : addBook())}
              className="bg-red-900 text-white px-6 py-2 rounded font-semibold 
              hover:bg-red-800 transition"
            >
              {editId ? "Update Book" : "Add Book"}
            </button>
            {editId && (
              <button
                onClick={resetForm}
                className="bg-gray-400 text-white px-6 py-2 rounded font-semibold 
                hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
