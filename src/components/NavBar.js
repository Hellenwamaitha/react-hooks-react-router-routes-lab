import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 5px 5px",
  background: "red",
  textDecoration: "none",
  color: "Black",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Actors
      </NavLink>
    </div>
  )
  }


 

export default NavBar;
