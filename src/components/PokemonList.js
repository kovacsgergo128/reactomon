import React, { Component } from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";

export class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsActualPage: [],
      previousPage: null,
      nextPage: null,
      actualPageNr: 1
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

  handlePagination = e => {
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
        <div className="btn-group" role="group" onClick={this.handlePagination}>
          <button
            type="button"
            className="btn btn-warning"
            value="previous"
            style={{ color: "#000080" }}
          >
            Previous
          </button>
          <div
            style={{
              backgroundColor: "#fff",
              backgroundSize: "cover",
              color: "#000080",
              padding: "1px 15px",
              fontSize: "18px",
              textAlign: "center"
            }}
          >
            <p>{this.state.actualPageNr}</p>
          </div>
          <button
            type="button"
            className="btn btn-warning"
            value="next"
            style={{ color: "#000080" }}
          >
            Next
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.pokemonsActualPage.map(pokemon => {
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

export default PokemonList;
