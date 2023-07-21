import React from "react";
import "../../styles/jobCard.css";

const JobCard = ({
  id,
  index,
  title,
  salary,
  equity,
  applied,
  handleApply,
  companyHandle,
}) => {
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
      <button onClick={() => handleApply(id)}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
};

export default JobCard;
