import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search characters"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default Search;
