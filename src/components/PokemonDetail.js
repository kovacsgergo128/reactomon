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
      stats: [],
    };
  }

  getPokemonId = () => {
    const {
      match: {
        params: { pokemonId },
      },
    } = this.props;
    return pokemonId;
  };

  componentDidMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.getPokemonId()}/`)
      .then((res) =>
        this.setState({
          name: res.data.name,
          experience: res.data.base_experience,
          height: res.data.height,
          weight: res.data.weight,
          imgUrl: res.data.sprites.front_default,
          types: res.data.types,
          abilities: res.data.abilities,
          items: res.data.held_items,
          stats: res.data.stats,
        })
      );
  }

  render() {
    return (
      <div
        className="card"
        style={{
          width: "60%",
          margin: "0 auto",
          backgroundColor: "rgba(240, 173, 78, 0.8)",
          color: "#0000CD",
          boxShadow: "10px 10px 5px -2px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="card-header" style={{ fontSize: "20px" }}>
          Types:{" "}
          {this.state.types.map((type) => (
            <span
              key={type.type.name}
              style={{
                color: "#f0ad4e",
                backgroundColor: "#0000CD",
                margin: "3px 4px",
                padding: "0 5px 20px 5px",
                borderRadius: "15px",
              }}
            >
              {type.type.name}
            </span>
          ))}
          <span style={{ float: "right" }}>
            Experience:{" "}
            <span
              style={{
                color: "#f0ad4e",
                backgroundColor: "#0000CD",
                margin: "3px 4px",
                padding: "5px 5px 20px 5px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              {this.state.experience}
            </span>
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
              margin: "-60px auto 40px auto",
            }}
          >
            {this.state.name}
          </h5>
          <div className="card-text" style={{ fontSize: "18px" }}>
            <div style={{ padding: "5px 0px", margin: "20px 0px" }}>
              Abilities:{" "}
              {this.state.abilities.map((ability) => (
                <span
                  key={ability.ability.name}
                  style={{
                    color: "#f0ad4e",
                    backgroundColor: "#0000CD",
                    margin: "3px 4px",
                    padding: "0px 5px 15px 5px",
                    borderRadius: "20px",
                    float: "right",
                  }}
                >
                  {ability.ability.name}
                </span>
              ))}
            </div>
            <div style={{ padding: "5px 0px", margin: "20px 0px" }}>
              Items:{" "}
              {this.state.items.map((item) => (
                <span
                  key={item.item.name}
                  style={{
                    color: "#f0ad4e",
                    backgroundColor: "#0000CD",
                    margin: "3px 4px",
                    padding: "0px 5px 15px 5px",
                    borderRadius: "20px",
                    float: "right",
                  }}
                >
                  {item.item.name}
                </span>
              ))}
            </div>
          </div>
          <ul className="list-group list-group-flush mt-5">
            {this.state.stats.map((stat) => (
              <li
                className="list-group-item"
                style={{
                  backgroundColor: "rgba(240, 173, 78, 0.8)",
                  fontSize: "18px",
                }}
                key={stat.stat.name}
              >
                {stat.stat.name}
                <span
                  style={{
                    float: "right",
                    backgroundColor: "#0000cd",
                    borderRadius: "20px",
                    color: "#f0ad4e",
                    margin: "3px 4px",
                    padding: "0px 0px 10px 0px",
                    width: "40px",
                    textAlign: "center",
                  }}
                >
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
