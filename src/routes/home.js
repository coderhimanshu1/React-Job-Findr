import { Link } from "react-router-dom";
import { useContext } from "react";
import job1 from "../images/job1.svg";
import popular from "../images/popular.svg";
import "../styles/home.css";
import BackgroundAnimation from "../BackgroundAnimation";

import UserContext from "./common/userContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="home">
      <BackgroundAnimation />

      <header>
        {" "}
        Find your{" "}
        <b>
          Dream <br />
          Job
        </b>{" "}
        here!
      </header>
      {!currentUser && (
        <small>Login or Register to get started with your Search.</small>
      )}
      {currentUser && (
        <div>
          <h1>Welcome Back, {currentUser.username}!</h1>
        </div>
      )}
      {!currentUser && (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      )}

      <div className="home-popular">
        <img src={popular} alt="popular" className="home-popular-img" />
        <div className="home-cardContainer">
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div className="home-card-title">
              <p>Software Engineer</p>
              <small>3 min ago</small>
            </div>
          </div>
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div className="home-card-title">
              {" "}
              <p>Financial Advisor</p>
              <small>3 min ago</small>
            </div>
          </div>
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div className="home-card-title">
              {" "}
              <p>Civil Engineer</p>
              <small>3 min ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
