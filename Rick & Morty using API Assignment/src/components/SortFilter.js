import React from "react";

const SortFilter = ({ sortOrder, setSortOrder, filter, setFilter }) => (
  <div className="sort-filter">
    <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
      <option value="">All</option>
      <option value="Human">Human</option>
      <option value="Alien">Alien</option>
    </select>
  </div>
);

export default SortFilter;
