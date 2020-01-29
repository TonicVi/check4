import React, { Component } from "react";
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      login: "",
      password: "",
      isNewUserCreated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, login, password } = this.state;
    axios({
      method: `post`,
      url: '/next/user',
      data: {
        name,
        login,
        password
      }
    }).then(
      this.setState({
        isNewUserCreated: true
      })
    );
  }

  render() {
    const { name, login, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="signup">
          <label htmlFor="name" className="signup-name">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder=" Name"
              required
            />
          </label>
          <label htmlFor="login" className="signup-login">
            <input
              type="text"
              id="login"
              name="login"
              value={login}
              onChange={this.handleChange}
              placeholder=" Login"
              required
            />
          </label>
          <label htmlFor="password" className="signup-password">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder=" Password"
              required
            />
          </label>
          <button type="submit" className="signup-button">
            Create my account
          </button>
        </form>
      </>
    );
  }
}

export default SignUp;
