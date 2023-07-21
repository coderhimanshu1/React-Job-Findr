import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../common/userContext";
import JoblyApi from "../../helper/api";
import job from "../../images/jobs.svg";
import "../../styles/jobs.css";
import JobCard from "./jobCard";
import SearchBar from "../common/searchBar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getJobsFromAPI() {
      const jobsData = await JoblyApi.getJobs();
      setJobs(jobsData);
    }
    getJobsFromAPI();
  }, []);

  if (!currentUser) {
    navigate("/login");
  }

  return (
    <div className="jobs">
      <div className="jobs-header">
        <h1>Job Listings</h1>

        <img src={job} alt="jobs" />
      </div>

      <SearchBar
        placeholder="Search for any job title here"
        onSearch={(term) =>
          console.log(`Searching for jobs with the term: ${term}`)
        }
      />
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <JobCard
            id={job.id}
            title={job.title}
            companyHandle={job.companyHandle}
            salary={job.salary}
            equity={job.equity}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
