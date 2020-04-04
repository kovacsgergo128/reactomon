import React from "react";
import { Link } from "react-router-dom";

export default function PokemonListItem(props) {
  return (
    <Link to={`pokemon/${props.id}`}>
      <div
        className="card"
        style={{
          width: "16rem",
          margin: "10px",
          backgroundColor: "rgba(234, 238, 150, 0.9)"
        }}
      >
        <img className="card-img-top" src={props.imgUrl} alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
      </div>
    </Link>
  );
}
