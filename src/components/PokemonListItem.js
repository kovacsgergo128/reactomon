import React from "react";
import { Link } from "react-router-dom";

export default function PokemonListItem(props) {
  return (
    <Link to={`pokemon/${props.id}`}>
      <div
        className="card border-dark"
        style={{
          width: "16rem",
          margin: "10px",
          backgroundColor: "rgba(240, 173, 78, 0.8)",
          color: "#0000CD",
          boxShadow: "10px 10px 5px -2px rgba(0, 0, 0, 1)"
        }}
      >
        <img className="card-img-top" src={props.imgUrl} alt={props.name} />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
        </div>
      </div>
    </Link>
  );
}
