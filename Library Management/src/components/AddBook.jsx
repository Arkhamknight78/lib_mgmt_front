import React, { useState } from "react";
import api from "../api"; // Import your Axios instance

const AddBooks = () => {
  const [book, setBook] = useState({ title: "", author: "", year: "", availability: true });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/books", book); // API call to add book
      console.log("Book added:", response.data);
      alert("Book added successfully!");
      setBook({ title: "", author: "", year: "", availability: true }); // Reset form
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add the book.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Publication Year"
          value={book.year}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
