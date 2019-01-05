import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid className="box-footer">
          <Row>
            <Col xs={6} md={6}>
              <div>
                <p>Contact</p>
                <p>
                  <i class="fas fa-map-marker-alt" /> 370 8th Ave New York
                </p>
                <p>
                  <i class="fas fa-phone" /> 917-654-2345
                </p>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div>
                <p>Visit</p>
                <Link to="/instagram">
                  <i class="fab fa-instagram" /> Instagram
                </Link>
                <p>
                  <Link to="/About">
                    <i class="fab fa-facebook-square" /> Facebook
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
