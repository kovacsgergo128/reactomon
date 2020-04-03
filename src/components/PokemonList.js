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

  getPage(url) {
    axios.get(url).then(res =>
      this.setState({
        pokemonsActualPage: res.data.results,
        previousPage: res.data.previous,
        nextPage: res.data.next
      })
    );
  }

  composeImageUrlFor(pokeUrl) {
    const splittedUrl = pokeUrl.split("/");
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      splittedUrl[splittedUrl.length - 2] +
      ".png"
    );
  }

  componentDidMount() {
    this.getPage("https://pokeapi.co/api/v2/pokemon");
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.pokemonsActualPage.map(pokemon => {
          return (
            <div>
              <PokemonListItem
                name={pokemon.name}
                imgUrl={this.composeImageUrlFor(pokemon.url)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PokemonList;
