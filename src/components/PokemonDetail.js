import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  getPokemonId = () => {
    const {
      match: {
        params: { pokemonId }
      }
    } = this.props;
    return pokemonId;
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.getPokemonId()}/`)
      .then(res => console.log(res.data));
  }

  render() {
    return <div></div>;
  }
}

export default PokemonDetail;
