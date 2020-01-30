import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import BookList from "./BookList";
import NextBooks from "./NextBooks";
import "./bookList.css";

class AllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    };
    this.getData = this.getData.bind(this);
    this.makeFav = this.makeFav.bind(this);
    this.deleteFav = this.deleteFav.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  makeFav(bookId) {
    axios
      .post(`/next/fav/${bookId}`, {
        id_book: bookId,
        id_user: 1
      })
      .then(this.getData())
  }

  deleteFav(nextId) {
    axios.delete(`/next/fav/${nextId}`).then(this.getData());
  }

  getData() {
    axios
      .get("/next/list")
      .then(res => res.data)
      .then(data =>
        this.setState({
          allBooks: data
        })
      );
  }

  render() {
    const { allBooks } = this.state;
    return (
      <div className="all-books-container">
        <h4 className="all-books-title">All the possibilities</h4>
        <div className="all-books-list">
          <BookList
            books={allBooks}
            makeFav={this.makeFav}
            deleteFav={this.deleteFav}
          />
        </div>
      </div>
    );
  }
}

export default AllBooks;
