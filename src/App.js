import React from "react";
import { Route, Switch } from "react-router-dom";
import FormBook from "./components/admin/FormBook";
import BookPage from "./components/admin/BookPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path='/admin/newbook'>
        <FormBook />
      </Route>
      <Route path='/admin/book'>
        <BookPage />
      </Route>
    </Switch>
  );
}

export default App;
