import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Row, Col, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid className="box-footer">
          <Row>
            <Col xs={6} md={6}>
              <div>
                <p>Contact</p>
                <p>370 8th Ave New York</p>
                <p>917-654-2345</p>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div>
                <p>Visit</p>
                <Link to="/instagram">Instagram</Link>
                <p>
                  <Link to="/About">Facebook</Link>
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
