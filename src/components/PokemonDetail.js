import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      experience: null,
      height: null,
      weight: null,
      imgUrl: null,
      types: [],
      abilities: [],
      items: [],
      stats: []
    };
  }

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
      .then(res =>
        this.setState({
          name: res.data.name,
          experience: res.data.base_experience,
          height: res.data.height,
          weight: res.data.weight,
          imgUrl: res.data.sprites.front_default,
          types: res.data.types,
          abilities: res.data.abilities,
          items: res.data.held_items,
          stats: res.data.stats
        })
      );
  }

  render() {
    return (
      <div className="card" style={{ width: "50%", margin: "0 auto" }}>
        <div className="card-header" style={{ fontSize: "20px" }}>
          Types:{" "}
          {this.state.types.map(type => (
            <span key={type.type.name} style={{ margin: "0 4px" }}>
              {type.type.name}
            </span>
          ))}
          <span style={{ float: "right" }}>
            Experience: <span>{this.state.experience}</span>
          </span>
        </div>
        <img
          className="card-img-top"
          src={this.state.imgUrl}
          alt={this.state.name}
          style={{ maxHeight: "300px", maxWidth: "300px", margin: "0 auto" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginTop: "-30px"
            }}
          >
            {this.state.name}
          </h5>
          <p className="card-text" style={{ fontSize: "20px" }}>
            <div>
              Abilities:{" "}
              {this.state.abilities.map(ability => (
                <span
                  key={ability.ability.name}
                  style={{ margin: "0 4px", float: "right" }}
                >
                  {ability.ability.name}
                </span>
              ))}
            </div>
            <div>
              Items:{" "}
              {this.state.items.map(item => (
                <span
                  key={item.item.name}
                  style={{ margin: "0 4px", float: "right" }}
                >
                  {item.item.name}
                </span>
              ))}
            </div>
          </p>
          <ul className="list-group list-group-flush">
            {this.state.stats.map(stat => (
              <li className="list-group-item">
                {stat.stat.name}
                <span style={{ float: "right" }}>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
