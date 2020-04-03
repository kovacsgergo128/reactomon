import React, { Component } from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";

export class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsActualPage: [],
      previousPage: null,
      nextPage: null
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res =>
      this.setState({
        pokemonsActualPage: res.data.results,
        previousPage: res.data.previous,
        nextPage: res.data.next
      })
    );
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.pokemonsActualPage.map(pokemon => {
          return (
            <div>
              <PokemonListItem name={pokemon.name} imgUrl={pokemon.imgUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokemonList;
