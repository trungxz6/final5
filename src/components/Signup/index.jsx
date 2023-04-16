import React, { useState } from "react";
import "./index.css";
import { database } from "../userData/database";
import { useNavigate } from "react-router-dom";


const SignupForm = () => {
    const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
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
};
    const submit = () => {
        database.push({
            username: username,
            password: password,
        });
    } 

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <div className="signup">
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">
        Please sign up your username and password!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {renderErrorMsg("username")}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {renderErrorMsg("password")}
        </div>
        <button type="submit" value="Log In" className="login_button" onClick={()=>{

            alert('SIGNUP SUCCESS')
            localStorage.setItem('crrUser',JSON.stringify({
                id:1,
                username: username,
                pass: password,
            }))
            navigate('/login')
        }}>Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;