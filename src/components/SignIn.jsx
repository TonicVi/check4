import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import { useAuth, useLog } from "../context/auth";

function SignIn() {
  const [login, setLogin] = useState("");
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const { isLoggedIn, setLoggedIn } = useLog();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('/next/signin', {
        login,
        password
      })
      .then(res => {
        if (res.status === 200) {
          setAuthTokens(res.data);
          setLoggedIn(true);
        }
      });
  }
  if (isLoggedIn) {
    const getUser = decode(localStorage.getItem("myUser"));
    if (getUser.id === 2) {
      return <Redirect to="/admin" />;
    } else {
      return <Redirect to="/user" />;
    }
  }

  return (
    <div className="container-signin">
      <form className="form-signin" onSubmit={handleSubmit}>
        {/* <label htmlFor="name" className="name-signin">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
            required
          />
        </label> */}
        <label htmlFor="login" className="login-signin">
          <input
            type="text"
            id="login"
            name="login"
            placeholder="login"
            onChange={e => {
              setLogin(e.target.value);
            }}
            value={login}
            required
          />
        </label>
        <label htmlFor="password" className="pass-signin">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            onChange={e => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </label>
        <button className="button-connexion-login" type="submit">
          Connexion
        </button>
      </form>
    </div>
  );
}

export default SignIn;
