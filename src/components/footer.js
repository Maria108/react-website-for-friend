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
                  <i class="fas fa-map-marker-alt" /> 313 7th St, Brooklyn, NY, 11215
                </p>
                <p>
                  <i class="fas fa-phone" /> 646-385-9985
                </p>
                <p>
                  <i class="far fa-clock" /> Fri 8:00AM - 7:00PM
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
