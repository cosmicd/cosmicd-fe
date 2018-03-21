import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { Route } from "react-router-dom";


const RouteNavItem = props => (
  <Route
    path={props.href}
    exact
    children={({ match, history }) => (
      <NavItem
        onClick={e => history.push(e.currentTarget.getAttribute("href"))}
        {...props}
        active={match ? true : false}
        
      />
    )}
  />
);
const NBItems = props => {
  return (
    <Navbar.Collapse>
      <Nav pullRight>
        <RouteNavItem key={1} href="/demolist">
          Demos
        </RouteNavItem>
      </Nav>
    </Navbar.Collapse>
  );
};
const NBHeader = props => {
  return (
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">{props.brandName}</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  );
};

export default ({ brandName, ...other }) => {
  return (
    <Navbar fluid collapseOnSelect>
      <NBHeader brandName={brandName} />
      <NBItems />
    </Navbar>
  );
};
