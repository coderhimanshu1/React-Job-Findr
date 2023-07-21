import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "../../helper/api";
import { Link, useNavigate } from "react-router-dom";
import company from "../../images/companies.svg";
import "../../styles/companies.css";
import UserContext from "../common/userContext";

import SearchBar from "../common/searchBar";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCompaniesFromAPI() {
      const companiesData = await JoblyApi.getCompanies();
      setCompanies(companiesData);
    }
    getCompaniesFromAPI();
  }, []);

  if (!currentUser) {
    navigate("/login");
  }

  return (
    <div className="companies">
      <div className="companies-header">
        <h1>Companies to work for!</h1>
        <img src={company} alt="companies" />
      </div>
      <SearchBar
        placeholder="Search for any company name here"
        onSearch={(term) =>
          console.log(`Searching for companies with the term: ${term}`)
        }
      />
      <div className="companies-container">
        {companies.map((company, index) => (
          <Link to={`/companies/${company.handle}`} key={index}>
            <div className="companies-card">
              <h2>{company.name}</h2>
              <p>{company.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Companies;
