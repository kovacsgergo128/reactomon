import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar />
        <Route exact path="/" render={() => <Welcome />} />
        <Route
          path="/pokemon"
          render={() => (
            <div className="d-flex flex-wrap justify-content-center">
              <PokemonList />
            </div>
          )}
        />
        <Route path="/type" />
      </div>
    </Router>
  );
}

export default App;
