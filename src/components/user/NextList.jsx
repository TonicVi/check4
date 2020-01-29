import React from "react";
// import './bookList.css';
import empty from '../../images/empty.png';
import full from '../../images/full.png'

function NextList(props) {
  const { nextBooks } = props;
  return nextBooks.map(book => {
    const bookId = book.id;
    return (
      <div className="user-list-container" bookId={bookId}>
        <img src={book.cover} alt='book cover' className='user-list-cover'/>
        <h4 className="user-list-title">{book.title}</h4>
        <p className="user-list-author">{book.author}</p>
        <p className="user-list-genre">{book.genre}</p>
        <button type="button" className="user-fav-button"><img src={full} alt="fav-star"/></button>
      </div>
    );
  });
}

export default NextList;
