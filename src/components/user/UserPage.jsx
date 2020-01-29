import React from "react";
import { Route, Switch } from "react-router-dom";
import AllBooks from "./AllBooks";
import NextBooks from "./NextBooks";
import BurgerMenuUser from './BurgerMenu';

function UserPage() {
  return (
    <>
    <div className="user-menu">
      <BurgerMenuUser />
    </div>
    <Switch>
      <Route path="/user/nextbooks">
        <NextBooks />
      </Route>
      <Route path="/user">
        <AllBooks />
      </Route>

    </Switch>
    </>
  );
}

export default UserPage;