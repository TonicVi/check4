import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPage from "./components/admin/AdminPage";
import UserPage from "./components/user/UserPage";
import Welcome from './components/Welcome';
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route path="/user">
        <UserPage />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;
