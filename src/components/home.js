import React, { Component } from 'react';
import './home.css';
import { Row, Col, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="about pic-one">
            <Row>
              <Col xs={6} md={5}>
                <div />
              </Col>
              <Col xs={6} md={7}>
                <div className="on-top">
                  <p>Park Slope colonic Park Slope colonic Park Slope colonic Park Slope colonic</p>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
        <div className="about-two pic-two">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-circle">
                  <p className="img-about">About colonic</p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-circle">
                  <p className="img-about">Do's & Dont's</p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-circle">
                  <p className="img-about">Testimonials</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <div className="about pic-four">
            <Row>
              <Col xs={6} md={7}>
                <div className="on-top">
                  <p>Hi I'm Lena and I'm your therapist. I'm very cool and professional, you can trust me your butt.</p>
                </div>
              </Col>
              <Col xs={6} md={5} />
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
