import React, { Component } from "react";
import axios from "axios";
import BookList from "./BookList";

class AllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    };
    this.getData = this.getData.bind(this);
    this.makeFav = this.makeFav.bind(this);
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
  }

  getData() {
    axios
      .get('/next/list')
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
      <>
        <h4>All Books</h4>
        <BookList books={allBooks} makeFav={this.makeFav} />
      </>
    );
  }
}

export default AllBooks;
