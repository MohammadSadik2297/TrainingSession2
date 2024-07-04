import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/rickAndMortyAPI";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ searchTerm, sortOrder, filter }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await fetchCharacters();
      setCharacters(characters);
    };
    getCharacters();
  }, []);

  useEffect(() => {
    let filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== "") {
      filtered = filtered.filter((character) => character.species === filter);
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.id - b.id);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.id - a.id);
    }

    setFilteredCharacters(filtered);
  }, [characters, searchTerm, sortOrder, filter]);

  return (
    <div className="character-list">
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
