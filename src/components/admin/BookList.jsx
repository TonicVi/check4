import React from "react";
import './bookList.css';

function BookList(props) {
  const { books, handleDelete } = props;
  return books.map(book => {
    const bookId = book.id;
    return (
      <div className="admin-list-container" key={book.id}>
        <img src={book.cover} alt='book cover' className='admin-list-cover'/>
        <h4 className="admin-list-title">{book.title}</h4>
        <p className="admin-list-author">{book.author}</p>
        <p className="admin-list-genre">{book.genre}</p>
        <button type="button" className="admin-delete-button" onClick={() => handleDelete(bookId)}>plop</button>
      </div>
    );
  });
}

export default BookList;
