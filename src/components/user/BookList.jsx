import React from "react";
import './bookList.css';
import empty from '../../images/empty.png';

function BookList(props) {
  const { books, makeFav } = props;
  return books.map(book => {
    const bookId = book.id;
    return (
      <div className="user-list-container" bookId={bookId}>
        <img src={book.cover} alt='book cover' className='user-list-cover'/>
        <h4 className="user-list-title">{book.title}</h4>
        <p className="user-list-author">{book.author}</p>
        <p className="user-list-genre">{book.genre}</p>
        <button type="button" className="user-fav-button" onClick={() => makeFav(bookId)}><img src={empty} alt="fav-star"/></button>
      </div>
    );
  });
}

export default BookList;
