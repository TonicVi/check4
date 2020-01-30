import React from "react";
import { Route, Switch } from "react-router-dom";
import AllBooks from "./AllBooks";
import NextBooks from "./NextBooks";
import SideBar from './SideBar';
import "./bookList.css";
import BurgerMenuUser from "./BurgerMenu";

function UserPage() {
  return (
    <div className="user-page">
      <div className="user-menu">
        <BurgerMenuUser />
      </div>
      <div className="user-side">
        <SideBar />
      </div>
      <Switch>
        <Route
          path="/user/nextbooks"
          render={() => (
            <div className="user-next-page1">
              <NextBooks />
            </div>
          )}
        />
        <Route
          path="/user"
          render={() => (
            <div className="user-books-page">
              <AllBooks />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default UserPage;
