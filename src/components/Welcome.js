import React from "react";

export default function Welcome() {
  return (
    <div
      style={{
        backgroundColor: "rgba(240, 173, 78, 0.9)",
        padding: "20px",
        textAlign: "center",
        color: "#0000CD"
      }}
    >
      <h1 style={{ padding: "10px 0" }}>Welcome Visitor</h1>
      <h3>
        This is REACTOMON, a simple Pokemon listing site developed with React
        and using
        <a href="https://pokeapi.co/"> PokeApi</a> as data provider. Check the
        menu to continue{" "}
      </h3>
    </div>
  );
}
