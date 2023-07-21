import React, { useState, useEffect } from "react";
import JoblyApi from "../../helper/api";
import job from "../../images/jobs.svg";
import "../../styles/jobs.css";
import JobCard from "./jobCard";
import SearchBar from "../common/searchBar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  // TODO: replace 'testUser' with the actual username
  const username = "testUser";

  useEffect(() => {
    async function getJobsFromAPI() {
      const jobsData = await JoblyApi.getJobs();
      setJobs(jobsData);
    }
    getJobsFromAPI();
  }, []);

  const handleApply = async (jobId) => {
    await JoblyApi.applyToJob(username, jobId);
    setJobs(
      jobs.map((job) => (job.id === jobId ? { ...job, applied: true } : job))
    );
  };

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
            handleApply={handleApply}
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
