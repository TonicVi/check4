import React from "react";
import { Route, Switch } from "react-router-dom";
import FormBook from "./components/admin/FormBook";
import BookPage from "./components/admin/BookPage";
import UserPage from "./components/user/UserPage";
import Welcome from './components/Welcome';
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/admin/newbook">
        <FormBook />
      </Route>
      <Route path="/admin/book">
        <BookPage />
      </Route>
      <Route path="/user/book">
        <UserPage />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;
