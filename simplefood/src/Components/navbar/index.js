import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Wrapper } from "./style";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="navbar-wrapper">
        <Navbar className="shadow-lg" light expand="xl">
          <NavbarBrand className="navbar-brand-wrapper">
            <span className="navbar-brand-left">Simple</span>
            <span className="navbar-brand-right">Food</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navbar-menu-wrapper" navbar>
              <NavItem className="mx-2">
                <NavLink className="navbar-menu" active>
                  Recipes
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink className="navbar-menu">Nutrition Analysis</NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink className="navbar-menu">Compare</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </Wrapper>
  );
};

export default NavBar;
