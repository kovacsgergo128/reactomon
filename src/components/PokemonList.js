import React, { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";
import styled from "styled-components";

const PokemonList = (props) => {
  const [pokemonsActualPage, setPokemonsActualPage] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [actualPageNr, setActualPageNr] = useState(1);

  const getPage = (url) => {
    axios.get(url).then((res) => {
      setPokemonsActualPage(res.data.results);
      setPreviousPage(res.data.previous);
      setNextPage(res.data.next);
    });
  };

  const handlePagination = (e) => {
    if (e.target.value === "next" && nextPage !== null) {
      getPage(nextPage);
      setActualPageNr(actualPageNr + 1);
    } else if (e.target.value === "previous" && previousPage !== null) {
      getPage(previousPage);
      setActualPageNr(actualPageNr - 1);
    }
  };

  const getPokemonIdFrom = (url) => {
    const splittedUrl = url.split("/");
    return splittedUrl[splittedUrl.length - 2];
  };

  const composeImageUrlFor = (pokemonId) => {
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokemonId +
      ".png"
    );
  };

  useEffect(() => {
    getPage("https://pokeapi.co/api/v2/pokemon");
  }, []);

  return (
    <React.Fragment>
      <h2 style={{ marginBottom: "50px" }}>
        <HeaderSpan>List of Pokemons</HeaderSpan>
      </h2>
      <div className="d-flex justify-content-center" onClick={handlePagination}>
        <Button type="button" className="btn btn-warning" value="previous">
          Previous
        </Button>
        <PageDisplay>
          <p>{actualPageNr}</p>
        </PageDisplay>
        <Button type="button" className="btn btn-warning" value="next">
          Next
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {pokemonsActualPage.map((pokemon) => {
          return (
            <PokemonListItem
              key={pokemon.url}
              id={getPokemonIdFrom(pokemon.url)}
              name={pokemon.name}
              imgUrl={composeImageUrlFor(getPokemonIdFrom(pokemon.url))}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

const HeaderSpan = styled.span`
  background-color: rgba(240, 173, 78, 0.8);
  widows: auto;
  padding: 5px 20px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
`;

const Button = styled.button`
  color: #0000cd;
  width: 10%;
  font-size: 18px;
  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 1);
`;

const PageDisplay = styled.div`
  background-color: #f0ad4e;
  background-size: cover;
  height: 50px;
  line-height: 50px;
  width: 50px;
  font-size: 18px;
  text-align: center;
  margin: 0 10px;
  border-radius: 50%;
  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 1);
`;

export default PokemonList;
