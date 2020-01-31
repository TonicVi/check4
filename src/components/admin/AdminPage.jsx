import React from "react";
import { Route, Switch } from "react-router-dom";
import FormBook from "./FormBook";
import BookPage from "./BookPage";
import SideBar from "./SideBar";
import BurgerMenuAdmin from "./BurgerMenu";
import "./bookList.css";

function AdminPage() {
  return (
    <div className="admin-page">
      <div className="admin-menu">
        <BurgerMenuAdmin />
      </div>
      <div className="admin-side">
        <SideBar />
      </div>
      <Switch>
        <Route
          path="/admin/book"
          render={() => (
            <div className="admin-book-page">
              <BookPage />
            </div>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <div className="admin-form-page">
              <FormBook />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default AdminPage;
