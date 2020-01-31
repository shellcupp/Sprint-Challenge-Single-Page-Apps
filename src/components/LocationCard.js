import React from "react";

export default function LocationCard(props) {
  const {name, type, dimension, residents} = props;

  return (
<div>
<h1>{name}</h1>
<p>{type}</p>
<p>{dimension}</p>
<img src={residents.Array}/>
</div>
  )
}
