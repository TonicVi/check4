import React, { Component } from "react";
import axios from "axios";
import BookList from "./BookList";

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: []
    };
    this.getData = this.getData.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
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

  // handleDelete(id) {
  //   axios
  //   .delete(`/next/book/${id}`)
  // }

  render() {
    // return <p>lqsdn</p>;
    const  { allBooks }  = this.state;
    return <BookList books={allBooks} />;
  }
}

export default BookPage;