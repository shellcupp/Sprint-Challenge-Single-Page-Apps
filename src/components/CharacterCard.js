import React from "react";
import styled from "styled-components";

const CardWrapper = styled.section`
display:flex;
flex-direction: row;
`;

export default function CharacterCard(props) {
  const {name, status, image, species, gender} = props;

  return(
    <CardWrapper>
<div>
<img width="90%" src={image} alt="Character"/>
</div>
<div>
<h1>{name}</h1>
<p>Status: {status}</p>
<p>Species: {species}</p>
<p>Gender: {gender}</p>
</div>
</CardWrapper>
  ) 
}
