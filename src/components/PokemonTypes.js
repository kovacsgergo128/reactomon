import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonTypes = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  return (
    <React.Fragment>
      <h2 style={{ marginBottom: "50px" }}>
        <HeaderSpan>List of Pokemon Types</HeaderSpan>
      </h2>
      <div className="d-flex flex-wrap">
        {types.map((type) => {
          return (
            <ListCard className="card border-dark" key={type.name}>
              <div className="card-body">
                <h4 className="card-title" style={{ textAlign: "center" }}>
                  {type.name}
                </h4>
              </div>
            </ListCard>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const ListCard = styled.div`
  width: 16rem;
  margin: 10px;
  background-color: rgba(240, 173, 78, 0.8);
  color: #0000cd;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
`;

const HeaderSpan = styled.span`
  background-color: rgba(240, 173, 78, 0.8);
  widows: auto;
  padding: 5px 20px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
`;

export default PokemonTypes;
