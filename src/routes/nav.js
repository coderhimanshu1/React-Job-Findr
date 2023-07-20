import logo from "../images/logo.svg";
import "../styles/nav.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import UserContext from "./userContext";

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="nav">
      <div className="nav-brand">
        <NavLink href="/">
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
