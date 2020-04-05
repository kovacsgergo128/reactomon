import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListCard = styled.div`
  width: 16rem;
  margin: 10px;
  background-color: rgba(240, 173, 78, 0.8);
  color: #0000cd;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
`;

export default function PokemonListItem(props) {
  return (
    <Link to={`pokemon/${props.id}`}>
      <ListCard className="card border-dark">
        <img className="card-img-top" src={props.imgUrl} alt={props.name} />
        <div className="card-body">
          <h4 className="card-title" style={{ textAlign: "center" }}>
            {props.name}
          </h4>
        </div>
      </ListCard>
    </Link>
  );
}
