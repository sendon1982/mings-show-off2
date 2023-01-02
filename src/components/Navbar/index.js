import { Button } from "@mui/material";
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Button>Company Logo</Button>
        <NavMenu>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/create-team-template" activeStyle>
            Create Team Template
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;