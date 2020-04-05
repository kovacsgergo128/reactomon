import React from "react";

export default function Welcome() {
  return (
    <div
      style={{
        backgroundColor: "rgba(240, 173, 78, 0.8)",
        padding: "0 20px 25px 20px",
        textAlign: "center",
        color: "#0000CD",
        borderRadius: "5px",
        boxShadow: "10px 10px 5px -2px rgba(0, 0, 0, 1)"
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
