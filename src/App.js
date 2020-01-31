import React from 'react';
import WelcomePage from './components/WelcomePage';
import SearchForm from "./components/SearchForm.js";
import {Route, NavLink, Switch} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import styled from 'styled-components';
import LocationSearch from "./components/LocationSearch";

const NavDiv = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default function App() {
  return (
    <main>
 <NavDiv>
    <NavLink to='/'> Home </NavLink>
    <NavLink to ='/search-form'> Search for Character </NavLink>
    <NavLink to ='/location-search'> Search for Location </NavLink>
</NavDiv>
  <Switch>
      <Route path='/characters'>
          <CharacterList />
        </Route>
        <Route path='/search-form'>
          <SearchForm />
        </Route>
        <Route path='/location-search'>
        <LocationSearch />
      </Route>
        <Route exact path='/'>
        <WelcomePage/>
        </Route>
      </Switch>
    </main>
  );
}
