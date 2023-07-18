import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../images/register.svg";
import "../styles/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your server to log the user in
    console.log(`Logging in with email: ${username} and password: ${password}`);
  };

  return (
    <div className="register">
      <img src={register} alt="register" />
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="firstname"
            name="firstname"
            placeholder="enter first name"
            value={firstname}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="lastname"
            name="lastname"
            placeholder="enter last name"
            value={lastname}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faUserCircle} />
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
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={email}
            onChange={handleEmailChange}
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
        <input className="register-button" type="submit" value="Log In" />
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
