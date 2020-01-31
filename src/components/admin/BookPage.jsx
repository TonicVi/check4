import React, { Component } from "react";
import axios from "axios";
import BookList from "./BookList";
import "./bookList.css";

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: [],
      isEditing: false
    };
    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.editBook = this.editBook.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("/next/book")
      .then(res => res.data)
      .then(data =>
        this.setState({
          allBooks: data
        })
      );
  }

  editBook() {
    this.setState({ isEditing: 'isEditing' })
  }

  handleDelete(bookId) {
    axios.delete(`/next/book/${bookId}`).then(this.getData());
  }

  render() {
    const { allBooks, isEditing } = this.state;
    return (
      <div className="admin-book-container">
        <h4 className="admin-book-title">Manage books</h4>
        <div className="admin-book-list">
          <BookList books={allBooks} isEditing={isEditing} editBook={this.editBook} handleDelete={this.handleDelete} getBooks={this.getData} />;
        </div>
      </div>
    );
  }
}

export default BookPage;
