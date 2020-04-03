import React, { Component } from "react";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-warning">
        <Link className="navbar-brand" style={{ color: "#000080" }} to="/">
          REACTOMON
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavbarLink url="/pokemon" name="Pokemons" />
            </li>
            <li className="nav-item">
              <NavbarLink url="/types" name="Types" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
