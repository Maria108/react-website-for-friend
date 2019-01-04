import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="main-div pic-one">
            <Row>
              <Col xs={6} md={7}>
                <div className="on-top">
                  <p>Powerful detoxication methods for healthy life</p>
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
        <div className="second-section">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <div className="page-link">
                  <Link className="img-page-link" to="/About">
                    About colonic
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="page-link">
                  <Link className="img-page-link" to="/About">
                    Do's & Dont'
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="page-link">
                  <Link className="img-page-link" to="/Customers">
                    Testimonials
                  </Link>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <div className="main-div pic-four">
            <Row>
              <Col xs={6} md={5} />
              <Col xs={6} md={7}>
                <div className="on-top">
                  <p>Hi I'm Lena and I'm your therapist. I'm very cool and professional, you can trust me your butt.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
