import React, { Component } from "react";
import axios from "axios";
import NextList from "./NextList";
import "./bookList.css";

class NextBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextBooks: []
    };
    this.getData = this.getData.bind(this);
    this.deleteFav = this.deleteFav.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("/next/fav/book")
      .then(res => res.data)
      .then(data =>
        this.setState({
          nextBooks: data
        })
      );
  }

  deleteFav(nextId) {
    axios.delete(`/next/fav/${nextId}`).then(this.getData());
  }

  render() {
    const { nextBooks } = this.state;
    return (
      <div className="next-books-container">
        <div className="site-name">
          <h3>NEXT</h3>
        </div>
        <h4 className="next-books-title">My Next Readings</h4>
        <div className="next-books-list">
          <NextList nextBooks={nextBooks} deleteFav={this.deleteFav} />
        </div>
      </div>
    );
  }
}

export default NextBooks;
