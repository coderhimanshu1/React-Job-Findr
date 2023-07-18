import React, { useState, useEffect } from "react";
import JoblyApi from "../helper/api";
import job from "../images/jobs.svg";
import "../styles/jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  // replace 'testUser' with the actual username
  const username = "testUser";

  useEffect(() => {
    async function getJobsFromAPI() {
      const jobsData = await JoblyApi.getJobs();
      console.log("jobsData>>>>>", jobsData);
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
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h2>{job.title}</h2>
            <p>{job.companyHandle}</p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <p>
              <strong>Equity:</strong> {job.equity !== null ? job.equity : 0}
            </p>
            <button onClick={() => handleApply(job.id)}>
              {job.applied ? "Applied" : "Apply"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
