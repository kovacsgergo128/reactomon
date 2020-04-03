import React from "react";

export default function PokemonListItem(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.imgUrl} alt={props.name} />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
      </div>
    </div>
  );
}
