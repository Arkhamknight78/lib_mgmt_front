import React, { useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
  ]);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book List</h2>
      <ul className="divide-y divide-gray-200">
        {books.map((book) => (
          <li key={book.id} className="py-2">
            <div className="flex justify-between">
              <span>{book.title} by {book.author}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
