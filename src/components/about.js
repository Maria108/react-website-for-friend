import React, { Component } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="main-div picture-one">
            <Row>
              <Col xs={6} md={12}>
                <div className="on-top">
                  <p>About Colonic</p>
                </div>
                <div>
                  <p className="points">/> Detoxify your body</p>
                  <p className="points">/> Reshape the colon</p>
                  <p className="points">/> Boost immunity</p>
                  <p className="points">/> Increase energy</p>
                  <p className="points">/> Eliminate bloat</p>
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
          <div className="main-div picture-four">
            <Row>
              <Col xs={6} md={12}>
                <div className="on-top">
                  <p>Hi I'm Lena and I'm your therapist. I'm very cool and professional, you can trust me your butt.</p>
                </div>
                <div>
                  <p className="points">/> Detoxify your body</p>
                  <p className="points">/> Reshape the colon</p>
                  <p className="points">/> Boost immunity</p>
                  <p className="points">/> Increase energy</p>
                  <p className="points">/> Eliminate bloat</p>
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
