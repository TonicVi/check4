import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./burger.css";

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.closeMenu = this.closeMenu.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen
    });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <Menu
        isOpen={menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <NavLink to="/admin" className="menu-item">
          <div onClick={() => this.closeMenu()}>Add a book</div>
        </NavLink>

        <NavLink to="/admin/book" className="menu-item">
          <div onClick={() => this.closeMenu()}>Manage Books</div>
        </NavLink>
        <NavLink to="/" className="menu-item">
          <div onClick={() => this.closeMenu()}>Log out</div>
        </NavLink>
      </Menu>
    );
  }
}

export default BurgerMenu;
