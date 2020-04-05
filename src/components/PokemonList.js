import React, { Component } from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";
import styled from "styled-components";

export class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsActualPage: [],
      previousPage: null,
      nextPage: null,
      actualPageNr: 1,
    };
  }

  getPage(url) {
    axios.get(url).then((res) =>
      this.setState({
        pokemonsActualPage: res.data.results,
        previousPage: res.data.previous,
        nextPage: res.data.next,
      })
    );
  }

  handlePagination = (e) => {
    if (e.target.value === "next" && this.state.nextPage !== null) {
      this.getPage(this.state.nextPage);
      this.setState({ actualPageNr: this.state.actualPageNr + 1 });
    } else if (
      e.target.value === "previous" &&
      this.state.previousPage !== null
    ) {
      this.getPage(this.state.previousPage);
      this.setState({ actualPageNr: this.state.actualPageNr - 1 });
    }
  };

  getPokemonIdFrom(url) {
    const splittedUrl = url.split("/");
    return splittedUrl[splittedUrl.length - 2];
  }

  composeImageUrlFor(pokemonId) {
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      pokemonId +
      ".png"
    );
  }

  componentDidMount() {
    this.getPage("https://pokeapi.co/api/v2/pokemon");
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{ marginBottom: "50px" }}>
          <HeaderSpan>List of Pokemons</HeaderSpan>
        </h2>
        <div
          className="d-flex justify-content-center"
          onClick={this.handlePagination}
        >
          <Button type="button" className="btn btn-warning" value="previous">
            Previous
          </Button>
          <PageDisplay>
            <p>{this.state.actualPageNr}</p>
          </PageDisplay>
          <Button type="button" className="btn btn-warning" value="next">
            Next
          </Button>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.pokemonsActualPage.map((pokemon) => {
            return (
              <PokemonListItem
                key={pokemon.url}
                id={this.getPokemonIdFrom(pokemon.url)}
                name={pokemon.name}
                imgUrl={this.composeImageUrlFor(
                  this.getPokemonIdFrom(pokemon.url)
                )}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const HeaderSpan = styled.span`
  background-color: rgba(240, 173, 78, 0.8);
  widows: auto;
  padding: 0 20px 25px 20px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
`;

const Button = styled.button`
  color: #0000cd;
  width: 10%;
  font-size: 18px;
  padding-top: 0;
  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 1);
`;

const PageDisplay = styled.div`
  background-color: #f0ad4e;
  background-size: cover;
  padding: 1px 15px;
  font-size: 18px;
  text-align: center;
  margin: 0 15px;
  border-radius: 50%;
  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 1);
`;

export default PokemonList;
