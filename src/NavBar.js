import React from "react";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "auto",
  padding: "12px",
  margin: "10px 10px 6px",
  background: "orange",
  textDecoration: "none",
  color: "black",
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
          background: "skyblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/fun"
        exact
        style={linkStyles}
        activeStyle={{
          background: "skyblue",
        }}
      >
        Fun
      </NavLink>
      <NavLink
        to="/dnd"
        exact
        style={linkStyles}
        activeStyle={{
          background: "skyblue",
        }}
      >
        Drag N' Drop
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "skyblue",
        }}
      >
        About
      </NavLink>
    </div>
  );
}
  
  export default NavBar;