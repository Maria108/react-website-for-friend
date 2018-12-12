import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul class="footer-list">
          <li>
            <Link to="/instagram">Instagram</Link>
          </li>
          <li>
            <Link to="/About">Facebook</Link>
          </li>
          <li>
            <Link to="/Customers">Telephone</Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
