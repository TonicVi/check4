import React from "react";

function BookList(props) {
  const { books } = props;
  console.log(books);
  return books.map(book => {
    return (
      <>
        <p className="admin-list-title">{book.title}</p>
        <p className="admin-list-author">{book.author}</p>
        <p className="admin-list-genre">{book.genre}</p>
      </>
    );
  });
}

export default BookList;
