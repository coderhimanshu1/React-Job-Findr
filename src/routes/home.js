import job1 from "../images/job1.svg";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="home">
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
      <div>
        <a href="/login">
          <button>Login</button>
        </a>
        <a href="/register">
          <button>Register</button>
        </a>
      </div>
      <div className="home-popular">
        <p>Popular Jobs</p>
        <div className="home-cardContainer">
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div>
              <p>Software Engineer</p>
              <a href="/jobs">
                <button>Visit</button>
              </a>
            </div>
          </div>
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div>
              <p>Financial Advisor</p>
              <a href="/jobs">
                <button>Visit</button>
              </a>
            </div>
          </div>
          <div className="home-card">
            <img src={job1} alt="job1" />
            <div>
              <p>Civil Engineer</p>
              <a href="/jobs">
                <button>Visit</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
