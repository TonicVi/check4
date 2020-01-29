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
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("/next/book")
      // axios({
      //   method: "get",
      //   url: "/next/book"
      // })
      .then(res => res.data)
      .then(data =>
        this.setState({
          allBooks: data
        })
      );
  }

  render() {
    // return <p>lqsdn</p>;
    const  { allBooks }  = this.state;
    return <BookList books={allBooks} />;
  }
}

export default BookPage;
