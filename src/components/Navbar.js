import React from "react";
import styled from "styled-components";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <StyledNavBar className="navbar navbar-expand-lg fixed-top">
      <Link className="navbar-brand" to="/" style={{ color: "inherit" }}>
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
            <NavbarLink url="/type" name="Types" />
          </li>
        </ul>
      </div>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  background-color: #f0ad4e;
  color: #0000cd;
`;
