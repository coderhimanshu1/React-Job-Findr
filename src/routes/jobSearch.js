import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/jobSearch.css";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for jobs with the term: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="jobSearch">
      <label>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          name="jobTitle"
          value={searchTerm}
          onChange={handleInputChange}
          className="jobSearch-input"
          placeholder="Search for any job title here"
          required
        />
        <input type="submit" value="Search" className="jobSearch-button" />
      </label>
    </form>
  );
};

export default JobSearch;
