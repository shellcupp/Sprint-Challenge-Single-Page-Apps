import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
const [query, setQuery] = useState
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    Axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const data = response.data;
      console.log(response);
      const result = data.filter(character =>
        character.character
        .toLowerCase()
        .includes(query.toLowerCase()));
        setCharacter(result);
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleinputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
   
      {character.map(character, index => {
        return (
          <CharacterCard
          key={index}
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          />
        );
      })}
    </section>
  );
}
