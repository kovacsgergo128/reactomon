import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLink(props) {
  return (
    <Link
      className="nav-item nav-link active"
      to={props.url}
      style={{ color: "#000080" }}
    >
      {props.name}
    </Link>
  );
}
