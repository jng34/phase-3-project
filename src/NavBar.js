import React from "react";
import ReactDOM from 'react-dom/client';
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "10px 10px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "blue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        exact
        style={linkStyles}
        activeStyle={{
          background: "blue",
        }}
      >
        Users
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "blue",
        }}
      >
        About
      </NavLink>
    </div>
  );
}
  
  export default NavBar;