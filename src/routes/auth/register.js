import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../images/register.svg";
import "../../styles/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await register(formData);
    if (result.success) {
      navigate("/");
    }
  };

  return (
    <div className="register">
      <img src={registerImg} alt="register" />
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="firstName"
            name="firstName"
            placeholder="enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="lastName"
            name="lastName"
            placeholder="enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faUserCircle} />
          <input
            type="username"
            name="username"
            placeholder="enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="enter password "
            onChange={handleChange}
            required
          />
        </label>
        <input
          className="register-button"
          type="submit"
          value="Log In"
          onClick={register}
        />
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
