import React, { Component } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="main-div picture-about">
            <Row>
              <Col xs={6} md={12}>
                <div className="about-colon">
                  <h1>About Colonic</h1>
                </div>
                <div>
                  <p className="info-about-colon">
                    Colonic blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah
                    Blah blah blah Blah blah blah Blah blah blah blah blah Blah blah blah Blah blah blah Blah blah blah
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah blah Blah blah blah
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
        <div className="about-two">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <p className="img-about-about">Myth 1</p>
                  <p className="myth">
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <p className="img-about-about">Myth 2</p>
                  <p className="myth">
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <p className="img-about-about">Myth 3</p>
                  <p className="myth">
                    Blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah
                    Blah blah blah Blah blah blah Blah blah
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <p className="img-about-about">Myth 4</p>
                  <p className="myth">
                    Blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <p className="img-about-about">Myth 5</p>
                  <p className="myth">
                    Blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <p className="img-about-about">Myth 6</p>
                  <p className="myth">
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah Blah blah blah
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <div className="main-div picture-about">
            <Row>
              <Col xs={6} md={12}>
                <div className="about-colon">
                  <h1>Do's and Dont's</h1>
                </div>
                <div className="info-dos">
                  <p className="points">
                    <i class="far fa-check-square" /> Detoxify your body
                  </p>
                  <p className="points">
                    <i class="far fa-check-square" /> Reshape the colon
                  </p>
                  <p className="points">
                    <i class="far fa-check-square" /> Boost immunity
                  </p>
                  <p className="points">
                    <i class="far fa-check-square" /> Increase energy
                  </p>
                  <p className="points">
                    <i class="far fa-check-square" /> Eliminate bloat
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default About;
