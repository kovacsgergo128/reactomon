import React, { Component } from "react";
import axios from "axios";

export class PokemonTypes extends Component {
  constructor() {
    super();
    this.state = {
      types: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    return (
      <React.Fragment>
        <h2 style={{ marginBottom: "50px" }}>
          <span
            style={{
              backgroundColor: "rgba(240, 173, 78, 0.8)",
              widows: "auto",
              padding: "0 20px 25px 20px",
              borderRadius: "5px",
              boxShadow: "10px 10px 5px -2px rgba(0, 0, 0, 1)",
            }}
          >
            List of Pokemon Types
          </span>
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.types.map((type) => {
            return (
              <div
                className="card border-dark"
                style={{
                  width: "16rem",
                  margin: "10px",
                  backgroundColor: "rgba(240, 173, 78, 0.8)",
                  color: "#0000CD",
                  boxShadow: "10px 10px 5px -2px rgba(0, 0, 0, 1)",
                }}
                key={type.name}
              >
                <div className="card-body">
                  <h4 className="card-title" style={{ textAlign: "center" }}>
                    {type.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonTypes;
