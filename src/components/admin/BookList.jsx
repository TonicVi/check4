import React, { useState } from "react";
import "./bookList.css";
import FormBook from './FormBook';
import remove from "../../images/remove2.png";
import pen from "../../images/pen.png";

function BookList(props) {
  const { books, handleDelete, isEditing, editBook } = props;
  const [ selectedBook, setSelectedBook ] = useState(null);
  return books.map(book => {
    const bookId = book.id;
    function getRightForm(bookId) {
      editBook(bookId);
      setSelectedBook(bookId);
    }
    return (
      <div className="admin-list-container" key={book.id}>
        <img src={book.cover} alt="book cover" className="admin-list-cover" />
        <h4 className="admin-list-title">{book.title}</h4>
        <p className="admin-list-author">{book.author}</p>
        <p className="admin-list-genre">{book.genre}</p>
        <button
          type="button"
          className="admin-delete-button"
          onClick={() => handleDelete(bookId)}
        >
          <img src={remove} alt="delete icon" className="cross" />
        </button>
        <button type="button" onClick={() => getRightForm(bookId)} className="admin-modify-button">
          <img src={pen} alt="modify icon" className="pen" />
        </button>
        {selectedBook === book.id && (
          <FormBook
            title={book.title}
            author={book.author}
            genre={book.genre}
            cover={book.cover}
            isEditing={isEditing}
            bookId={book.id}
          />
        )}
      </div>
    );
  });
}

export default BookList;
