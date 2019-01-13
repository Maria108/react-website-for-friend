import React, { Component } from 'react';
import './header.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Park Slope Colonics</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2}>
              <Link to="/">HOME</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/About">ABOUT</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/Blog">BLOG</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/About#how-to-prepare">HOW TO PREPARE</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/Faq">FAQ AND PRICING</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/Customers">TESTIMONIALS</Link>
            </NavItem>
            <NavItem eventKey={4}>
              <Link to="/Contacts">CONTACTS</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
