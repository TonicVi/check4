import React, { Component } from "react";
import axios from "axios";
import NextList from "./NextList";

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
      <>
        <h4>My Next Readings</h4>
        <NextList nextBooks={nextBooks} deleteFav={this.deleteFav} />
      </>
    );
  }
}

export default NextBooks;
