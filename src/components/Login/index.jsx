import React, { useState } from "react";
import "./index.css";
import { database } from "../userData/database";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});

      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

    const checkLogin = () => {
        if (localStorage.getItem('crrUser')){
            const getUser = JSON.parse(localStorage.getItem('crrUser'))
            if (getUser.username === username && getUser.pass === password) {
                navigate('/')
            }
            else {
                navigate('/login')
            }
        } 
        else {
            navigate('/login')
            localStorage.removeItem('crrUser')
        }
    }

  return (
    <div className="login">
      <h1 className="title">Log In</h1>
      <p className="subtitle">
        Please log in using your username and password!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <button className="login_button" onClick={checkLogin}>Submit</button>
      </form>
      <div className="link_container">
        <a href="/signup" className="small">
          You don't have account yet?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;