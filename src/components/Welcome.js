import React from "react";
import styled from "styled-components";

export default function Welcome() {
  return (
    <TextBox>
      <h1 style={{ padding: "10px 0" }}>Welcome Visitor</h1>
      <h3>
        This is REACTOMON, a simple Pokemon listing site developed with React
        and using
        <a href="https://pokeapi.co/"> PokeApi</a> as data provider. Check the
        menu to continue{" "}
      </h3>
    </TextBox>
  );
}

const TextBox = styled.div`
  background-color: rgba(240, 173, 78, 0.8);
  height: 11rem;
  padding: 0 20 px 40px 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 10px 10px 5px -2px rgba(0, 0, 0, 1);
`;
