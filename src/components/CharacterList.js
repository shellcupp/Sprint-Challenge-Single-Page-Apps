import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
 
const [character, setCharacter] = useState([]);
const [query, setQuery] = useState("");

  useEffect(() => {
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
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
   <section>
  <form>
    <input
      type="text"
      onChange={handleInputChange}
      value={query}
      name="name"
      tabIndex="0"
      className="prompt search-name"
      placeholder="search by name"
      autoComplete="off"
    />
  </form>

      {character.map(character, index => {
        return (
          <CharacterCard
          key={index}
          name={character.name}
          status={character.status}
          image={character.image}
          species={character.species}
          gender={character.gender}
          
          />
        );
      })}
    </section>
  );
}
