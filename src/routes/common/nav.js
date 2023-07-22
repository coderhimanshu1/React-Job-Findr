import logo from "../../images/logo.svg";
import "../../styles/nav.css";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import JoblyApi from "../../helper/api";

import UserContext from "./userContext";

const NavBar = () => {
  const { currentUser, setCurrentUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    JoblyApi.token = null;
    setCurrentUser(null);
    setToken(null);
    // remove user data from local storage
    window.localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="nav">
      <div className="nav-brand">
        <NavLink exact to="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </NavLink>
        <NavLink exact to="/">
          <p>Job Findr</p>
        </NavLink>
      </div>

      {currentUser ? (
        <div className="nav-links">
          <NavLink exact to="/companies">
            Companies
          </NavLink>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
          <NavLink exact to="/profile">
            My Profile
          </NavLink>
          <button className="nav-logout" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="nav-links">
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/register">
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
