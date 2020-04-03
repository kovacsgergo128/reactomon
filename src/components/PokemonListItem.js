import React from "react";

export default function PokemonListItem(props) {
  return (
    <div className="card" style={{ width: "16rem", margin: "10px" }}>
      <img className="card-img-top" src={props.imgUrl} alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
  );
}
