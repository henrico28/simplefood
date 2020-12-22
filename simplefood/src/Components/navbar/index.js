import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="navbar-wrapper">
        <Navbar className="shadow" light expand="xl">
          <NavbarBrand
            className="navbar-brand-wrapper"
            onClick={() => {
              history.push("/");
            }}
          >
            <span className="navbar-brand-left">Simple</span>
            <span className="navbar-brand-right">Food</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto navbar-menu-wrapper" navbar>
              <NavItem className="mx-2">
                <NavLink
                  className={`navbar-menu ${
                    props.currentPage === "recipes" ? "active" : ""
                  } `}
                  tag={Link}
                  to="/"
                >
                  Recipes
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink
                  className={`navbar-menu ${
                    props.currentPage === "nutritionanalyze" ? "active" : ""
                  } `}
                  tag={Link}
                  to="/nutritionanalyze"
                >
                  Nutrition Analysis
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink
                  className={`navbar-menu ${
                    props.currentPage === "compare" ? "active" : ""
                  } `}
                  tag={Link}
                  to="/compare"
                >
                  Compare
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </Wrapper>
  );
};

export default NavBar;
