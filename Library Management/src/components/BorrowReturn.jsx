import React, { useState } from "react";

const BorrowReturn = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", borrowed: false },
    { id: 2, title: "Book 2", borrowed: true },
  ]);

  const toggleBorrow = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, borrowed: !book.borrowed } : book
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Borrow/Return Books</h2>
      <ul className="divide-y divide-gray-200">
        {books.map((book) => (
          <li key={book.id} className="py-4 flex justify-between items-center">
            <span>
              {book.title} - {book.borrowed ? "Borrowed" : "Available"}
            </span>
            <button
              onClick={() => toggleBorrow(book.id)}
              className={`px-4 py-2 rounded ${
                book.borrowed
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {book.borrowed ? "Return" : "Borrow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowReturn;
