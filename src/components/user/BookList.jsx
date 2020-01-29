import React from "react";
import './bookList.css';
import empty from '../../images/empty.png';
import full from '../../images/full.png';

function BookList(props) {
  const { books, makeFav } = props;
  let star;
  return books.map(book => {
    if (book.bookID === book.id_book) {
      star = <img src={full} alt="fav-star"/>
    } else {
      star = <img src={empty} alt="fav-star"/>
    }
    const bookId = book.bookID;
    return (
      <div className="user-list-container" bookId={bookId}>
        <img src={book.cover} alt='book cover' className='user-list-cover'/>
        <h4 className="user-list-title">{book.title}</h4>
        <p className="user-list-author">{book.author}</p>
        <p className="user-list-genre">{book.genre}</p>
        <button type="button" className="user-fav-button" onClick={() => makeFav(bookId)}>{star}</button>
      </div>
    );
  });
}

export default BookList;
