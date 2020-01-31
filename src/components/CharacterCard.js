import React from "react";

export default function CharacterCard(props) {
  const {name, image, species, gender} = props;

  return(
<div>
<h1>{name}</h1>
<img src={image} alt="Character"/>
<p>{species}</p>
<p>{gender}</p>
</div>
  ) 
}
