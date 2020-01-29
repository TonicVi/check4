import React from "react";
import { Route, Switch } from "react-router-dom";
import FormBook from "./FormBook";
import BookPage from "./BookPage";
import BurgerMenuAdmin from './BurgerMenu';

function AdminPage() {
  return (
    <>
    <div className="admin-menu">
      <BurgerMenuAdmin />
    </div>
    <Switch>
      <Route path="/admin/newbook">
        <FormBook />
      </Route>
      <Route path="/admin/book">
        <BookPage />
      </Route>
    </Switch>
    </>
  );
}

export default AdminPage;
