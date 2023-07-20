import { Link } from "react-router-dom";
import { useContext } from "react";
import job1 from "../images/job1.svg";
import "../styles/home.css";
import BackgroundAnimation from "../BackgroundAnimation";

import UserContext from "./userContext";
import JobSearch from "./jobSearch";

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
      <small>Login or Register to get started with your Search.</small>
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
      <div className="home-jobSearch">
        <JobSearch />
      </div>
      <div className="home-popular">
        <p>Popular Jobs</p>
        <div className="home-cardContainer">
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div>
              <p>Software Engineer</p>
              <Link to="/jobs">
                <button>Visit</button>
              </Link>
            </div>
          </div>
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div>
              <p>Financial Advisor</p>
              <Link to="/jobs">
                <button>Visit</button>
              </Link>
            </div>
          </div>
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div>
              <p>Civil Engineer</p>
              <Link to="/jobs">
                <button>Visit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
