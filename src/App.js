import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import PokemonTypes from "./components/PokemonTypes";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App container justify-content-center">
        <Navbar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/pokemon" component={PokemonList} />
        <Route exact path="/type" component={PokemonTypes} />
        <Route exact path="/pokemon/:pokemonId" component={PokemonDetail} />
      </div>
    </Router>
  );
}

export default App;
