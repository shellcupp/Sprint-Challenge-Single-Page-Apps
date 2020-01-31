import React, { useState, useEffect } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      console.log(res.data.results)
      const location = res.data.results.filter(loc =>
        loc.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
        setSearchResults(location);
    })
    .catch(err => {
      console.log('No data', err);
    })
  }, [searchTerm]);
   
   
   const handleChange = e => {
     console.log(e.target.value)
     setSearchTerm(e.target.value);
   };

  return (
    <section className="location-search">
     <form>
       <label htmlFor='name'> Search for Location: </label>
       <input
        id='name'
        type='text'
        name='textfield'
        value={searchTerm}
        placeholder='Enter location name'
        onChange={handleChange}
       />
     </form>
     <div className='character-list'>
      <ul>
       {searchResults.map((loc, index) => {
         return <LocationCard
         key={index}
         name={loc.name}
         type={loc.type}
         dimension={loc.dimension}
         residents={loc.residents}
         
         />
       })}
      </ul>
      </div>
    </section>
  );
}
