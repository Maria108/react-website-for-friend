import React, { Component } from 'react';
import './contacts.css';
import { Row, Col, Grid } from 'react-bootstrap';
import Maps from './map.js';
import MapContainer from './maps.js';
import { Link } from 'react-router-dom';

class Contacts extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="contacts-main">
            <Row>
              <Col xs={12} md={6}>
                <div className="contact-info">
                  <h1>Park Slope Colonics</h1>
                  <p>
                    <i class="fas fa-phone" /> 917-654-2345
                  </p>
                  <p>
                    <i class="far fa-envelope" /> reach.elena.bykova@gmail.com
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="my-maps">
                  <MapContainer />
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
