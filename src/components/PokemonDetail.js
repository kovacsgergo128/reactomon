import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

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
      <DetailCard className="card border-dark">
        <div className="card-header">
          Types:{" "}
          {this.state.types.map((type) => (
            <TextValueDisplay key={type.type.name}>
              {type.type.name}
            </TextValueDisplay>
          ))}
          <span style={{ float: "right" }}>
            Experience:{" "}
            <ExperienceValueDisplay>
              {this.state.experience}
            </ExperienceValueDisplay>
          </span>
        </div>
        <BigCardImage
          className="card-img-top"
          src={this.state.imgUrl}
          alt={this.state.name}
        />
        <div className="card-body">
          <CardTitle className="card-title">{this.state.name}</CardTitle>
          <div className="card-text">
            <PropertyTextBox>
              Abilities:{" "}
              {this.state.abilities.map((ability) => (
                <TextValueDisplay
                  key={ability.ability.name}
                  style={{ float: "right" }}
                >
                  {ability.ability.name}
                </TextValueDisplay>
              ))}
            </PropertyTextBox>
            <PropertyTextBox>
              Items:{" "}
              {this.state.items.map((item) => (
                <TextValueDisplay
                  key={item.item.name}
                  style={{ float: "right" }}
                >
                  {item.item.name}
                </TextValueDisplay>
              ))}
            </PropertyTextBox>
          </div>
          <ul className="list-group list-group-flush mt-5">
            {this.state.stats.map((stat) => (
              <StatListItem className="list-group-item" key={stat.stat.name}>
                {stat.stat.name}
                <StatValueDisplay>{stat.base_stat}</StatValueDisplay>
              </StatListItem>
            ))}
          </ul>
        </div>
      </DetailCard>
    );
  }
}

const DetailCard = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: rgba(240, 173, 78, 0.8);
  color: #0000cd;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
  font-size: 20px;
`;

const TextValueDisplay = styled.span`
  color: #f0ad4e;
  background-color: #0000cd;
  margin: 3px 4px;
  padding: 5px 5px;
  border-radius: 15px;
`;

const ExperienceValueDisplay = styled.span`
  color: #f0ad4e;
  background-color: #0000cd;
  margin: 3px 4px;
  padding: 10px 5px;
  border-radius: 30px;
  text-align: center;
`;

const StatValueDisplay = styled.span`
  float: right;
  background-color: #0000cd;
  border-radius: 20px;
  color: #f0ad4e;
  margin: auto 0;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

const BigCardImage = styled.img`
  max-height: 300px;
  max-width: 300px;
  margin: 0 auto;
`;

const PropertyTextBox = styled.div`
  padding: 5px 0px;
  margin: 20px 0px;
  font-size: 18px;
`;

const StatListItem = styled.li`
  background-color: rgba(240, 173, 78, 0.8);
  font-size: 18px;
`;

const CardTitle = styled.h5`
  text-align: center;
  font-size: 40px;
  margin: -20px auto 40px auto;
`;

export default PokemonDetail;
