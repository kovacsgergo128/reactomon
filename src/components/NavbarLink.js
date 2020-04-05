import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLink(props) {
  return (
    <Link
      className="nav-item nav-link active"
      to={props.url}
      style={{ color: "inherit" }}
    >
      {props.name}
    </Link>
  );
}
