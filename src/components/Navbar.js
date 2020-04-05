import React, { useState } from "react";
import styled from "styled-components";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const [urlData] = useState([
    { name: "Pokemons", url: "/pokemon" },
    { name: "Types", url: "/type" },
  ]);

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
          {urlData.map((link) => {
            return (
              <li className="nav-item active" key={link.url}>
                <NavbarLink url={link.url} name={link.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  background-color: #f0ad4e;
  color: #0000cd;
`;

export default Navbar;
