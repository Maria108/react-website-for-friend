import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/About">About</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/Customers">Customers</Link>
            </NavItem>
            <NavItem eventKey={4}>
              <Link to="/Contacts">Contacts</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
