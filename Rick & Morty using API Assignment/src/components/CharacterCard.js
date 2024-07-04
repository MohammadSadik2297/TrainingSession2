import React from "react";

const CharacterCard = ({ character }) => (
  <div className="character-card">
    <img src={character.image} alt={character.name} />
    <h3>{character.name}</h3>
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
  </div>
);

export default CharacterCard;
