import React, { Component } from 'react';
import './contacts.css';
import { Grid } from 'react-bootstrap';
import Maps from './map.js';
import MapContainer from './maps.js';
import { Link } from 'react-router-dom';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts-main">
        <Grid>
          <div className="contact-info">
            <h1>Elena Bykova</h1>
            <p>917-497-65-71</p>
            <p>@elenaBykova</p>
            <p>reach.elena.bykova@gmail.com</p>
          </div>
          <h3>My Google Maps Demo</h3>
          <MapContainer />
          <div className="address">
            <p>313 7th St Brooklyn</p>
            <Link to="/map">Direction</Link>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
