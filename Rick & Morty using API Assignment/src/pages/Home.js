import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import Search from "../components/Search";
import SortFilter from "../components/SortFilter";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  return (
    <div className="home">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortFilter
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filter={filter}
        setFilter={setFilter}
      />
      <CharacterList
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        filter={filter}
      />
    </div>
  );
};

export default Home;
