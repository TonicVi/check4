import React, { Component } from "react";
import axios from "axios";
import BookList from "./BookList";
import "./bookList.css";

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    };
    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(bookId) {
    axios.delete(`/next/book/${bookId}`).then(this.getData());
  }

  render() {
    const { allBooks } = this.state;
    return (
      <div className="admin-book-container">
        <h4 className="admin-book-title">Manage books</h4>
        <div className="admin-book-list">
          <BookList books={allBooks} handleDelete={this.handleDelete} />;
        </div>
      </div>
    );
  }
}

export default BookPage;
