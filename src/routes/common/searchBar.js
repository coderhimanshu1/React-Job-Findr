import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/searchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <label>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          name="jobTitle"
          value={searchTerm}
          onChange={handleInputChange}
          className="searchBar-input"
          placeholder={placeholder}
          required
        />
        <input type="submit" value="Search" className="searchBar-button" />
      </label>
    </form>
  );
};

export default SearchBar;
