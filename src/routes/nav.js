import logo from "../images/logo.svg";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ user = null }) => {
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

      {user ? (
        <div className="nav-links">
          <NavLink href="/companies">Companies</NavLink>
          <NavLink exact to="/jobs">
            Jobs
          </NavLink>
          <NavLink exact to="/profile">
            My Profile
          </NavLink>
          <button>Log Out</button>
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
