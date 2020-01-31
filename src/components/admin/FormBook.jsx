import React, { Component } from "react";
import axios from "axios";
import "./formBook.css";

class FormBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      genre: "",
      cover: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  componentDidMount() {
    const { title, author, genre, cover, isEditing } = this.props;
    if (isEditing) {
      this.setState({
        title,
        author,
        genre,
        cover
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  clearAll() {
    this.setState({
      title: "",
      author: "",
      genre: "",
      cover: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, author, genre, cover } = this.state;
    axios({
      method: "post",
      url: "/next/book",
      data: {
        title,
        author,
        genre,
        cover
      }
    });
    this.clearAll();
  }

  handleEdit() {
    const { title, author, genre, cover } = this.state;
    const { bookId, getBooks } = this.props;
    axios
      .put(`/next/book/${bookId}`, {
        title,
        author,
        genre,
        cover
      })
      .then(getBooks);
  }

  render() {
    const { title, author, genre, cover } = this.state;
    const { isEditing } = this.props;
    return (
      <div className="form-book-container">
        {isEditing ? (
          <h3 className="form-book-header">Modify a book</h3>
        ) : (
          <h3 className="form-book-header">Add a new book</h3>
        )}
        <form className="form-book">
          <label htmlFor="title" className="form-book-title">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder=" Title"
              required
            />
          </label>
          <label htmlFor="author" className="form-book-author">
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={this.handleChange}
              placeholder=" Author"
              required
            />
          </label>
          <label htmlFor="cover" className="form-book-cover">
            <input
              type="text"
              id="cover"
              name="cover"
              value={cover}
              onChange={this.handleChange}
              placeholder=" Book cover"
              required
            />
          </label>
          <label htmlFor="genre" className="form-book-genre">
            <input
              type="text"
              id="genre"
              name="genre"
              value={genre}
              onChange={this.handleChange}
              placeholder=" Genre"
              required
            />
          </label>
          {isEditing ? (
            <button
              type="button"
              onClick={this.handleEdit}
              className="form-book-button"
            >
              Modify
            </button>
          ) : (
            <button
              type="button"
              onClick={this.handleSubmit}
              className="form-book-button"
            >
              Add
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default FormBook;
