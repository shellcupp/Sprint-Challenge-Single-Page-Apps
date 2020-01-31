import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {

const [location, setLocation] = useState([]);
const [query, setQuery] = useState("");

useEffect(() => {
  axios
    .get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      const data = response.data;
      console.log(response);
      const result = data.filter(location =>
        location.location
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      setCharacter(result);
    });
}, [query]);

const handleInputChange = event => {
  setQuery(event.target.value);
};

return (
    <div>
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
        {location.map(location, index => {
          return (
              <LocationCard
              key={index}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}
              />
          );
        })}
      </div>
  );
}