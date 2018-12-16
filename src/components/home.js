import React, { Component } from 'react';
import './home.css';
import { Row, Col, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="about pic-one">
          <Grid>
            <div className="about-info">
              <h1>Park Slope Colonics</h1>
              <p>Explore.</p>
            </div>
          </Grid>
        </div>
        <div className="about pic-two">
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <div className="image-circle">
                  <p className="img-about">About colonic</p>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="image-circle">
                  <p className="img-about">Do's & Dont's</p>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="image-circle">
                  <p className="img-about">Testimonials</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="about pic-three">
          <Grid>
            <div className="about-info">
              <h1>Benefits of Gravity Colon Hydrotherapy</h1>
              <ListGroup>
                <ListGroupItem>Flatter Stomach</ListGroupItem>
                <ListGroupItem>Clear Glowing Skin</ListGroupItem>
                <ListGroupItem>Eliminate Bloating</ListGroupItem>
                <ListGroupItem>Reduce Inflammation</ListGroupItem>
                <ListGroupItem>Eliminate Constipation</ListGroupItem>
                <ListGroupItem>Relieve Allergies</ListGroupItem>
              </ListGroup>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
