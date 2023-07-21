import JobCard from "../jobs/jobCard";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JoblyApi from "../../helper/api";
import "../../styles/company.css";
import UserContext from "../common/userContext";

const Company = () => {
  const { companyHandle } = useParams();
  const [company, setCompany] = useState(null);

  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCompanyFromAPI() {
      const companyData = await JoblyApi.getCompany(companyHandle);
      setCompany(companyData);
    }
    getCompanyFromAPI();
  }, [companyHandle]);

  if (!currentUser) {
    navigate("/login");
  }

  if (!company) return <div>Loading...</div>;

  return (
    <div className="company">
      <div className="company-header">
        <h1>{company.name}</h1>
        <p>{company.description}</p>
      </div>

      <div className="jobs-container">
        {company.jobs.map((job, index) => (
          <JobCard
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Company;
