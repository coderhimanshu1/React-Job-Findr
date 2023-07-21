import React, { useContext, useState, useEffect } from "react";
import "../../styles/jobCard.css";
import UserContext from "../common/userContext";

const JobCard = ({ id, index, title, salary, equity, companyHandle }) => {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);

  const [applied, setApplied] = useState();

  useEffect(
    function updateAppliedStatus() {
      // Fetch application status from localStorage
      const isApplied = localStorage.getItem(id);
      setApplied(isApplied === "true" ? true : false);
    },
    [id]
  );

  /** Apply for a job */
  async function handleApply() {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    localStorage.setItem(id, "true"); // Save application status to localStorage
    setApplied(true);
  }
  return (
    <div className="job-card" key={index}>
      <h2>{title}</h2>
      <p>{companyHandle}</p>
      <p>
        <strong>Salary:</strong> {salary !== null ? salary : "not specified"}
      </p>
      <p>
        <strong>Equity:</strong> {equity !== null ? equity : 0}
      </p>
      <button onClick={handleApply}>{applied ? "Applied" : "Apply"}</button>
    </div>
  );
};

export default JobCard;
