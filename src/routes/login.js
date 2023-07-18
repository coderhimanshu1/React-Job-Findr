import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../images/login.svg";
import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your server to log the user in
    console.log(`Logging in with email: ${username} and password: ${password}`);
  };

  return (
    <div className="login">
      <h1>Welcome Back</h1>
      <img src={login} alt="login" />
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="username"
            name="username"
            placeholder="enter username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="enter password "
            onChange={handlePasswordChange}
            required
          />
        </label>
        <input className="login-button" type="submit" value="Log In" />
        <p>
          Don't Have an Account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
