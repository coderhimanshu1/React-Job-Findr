import React, { useState, useEffect } from "react";
import JoblyApi from "../helper/api";
import "../styles/jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobsFromAPI() {
      const jobsData = await JoblyApi.getJobs();
      console.log("jobsData>>>>>", jobsData);
      setJobs(jobsData);
    }
    getJobsFromAPI();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h2>{job.title}</h2>
            <p>{job.companyHandle}</p>
            <p>
              <strong>Salary:</strong>{" "}
              {job.salary !== null ? job.salary : "not specified"}
            </p>
            <p>
              <strong>Equity:</strong> {job.equity !== null ? job.equity : 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
