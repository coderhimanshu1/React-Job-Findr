import React, { useState } from "react";
import "../styles/login.css";

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
    <form className="login" onSubmit={handleSubmit}>
      <label className="login-title">
        Username*
        <input
          className="login-input"
          type="username"
          name="username"
          placeholder="enter username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </label>
      <label className="login-title">
        Password*
        <input
          className="login-input"
          type="password"
          name="password"
          value={password}
          placeholder="enter password "
          onChange={handlePasswordChange}
          required
        />
      </label>
      <input className="login-button" type="submit" value="Log In" />
    </form>
  );
};

export default LoginForm;
