import React, { useState } from "react";
import { Route } from "react-router-dom";
import FormBook from "./components/admin/FormBook";
import BookPage from "./components/admin/BookPage";
import UserPage from "./components/user/UserPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PrivateRoute from './PrivateRoute';
import { AuthContext, LogContext } from './context/auth';
import "./App.css";

function App() {
  const [authTokens, setAuthTokens] = useState();
  const [isLoggedIn, setLoggedIn] = useState();
  const setTokens = data => {
    localStorage.removeItem("storage-jwt");
    localStorage.setItem("storage-jwt", data.token);
    setAuthTokens(data);
  };
  return (
    <>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <LogContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <PrivateRoute path="/admin" component={FormBook} />
          <PrivateRoute path="/user" component={UserPage} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/" component={SignUp} />
        </LogContext.Provider>
      </AuthContext.Provider>
    </>

  );
}

export default App;
