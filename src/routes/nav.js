import logo from "../images/logo.svg";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img className="nav-logo" src={logo} alt="logo" />
    </div>
  );
};

export default Nav;
