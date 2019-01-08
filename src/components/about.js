import React, { Component } from 'react';
import './about.css';
import { Row, Col, Grid } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="main-div picture-about">
            <div className="opacity-div">
              <Row>
                <Col xs={6} md={12}>
                  <div className="about-colon">
                    <h1>About Colonic</h1>
                  </div>
                  <div>
                    <p className="info-about-colon">
                      The Gravity Method colonic, also known as colon hydrotherapy, uses gravity for the flow of water
                      to gently clean the colon from unwanted fecal matter, gas and mucus. No pressure, machines, or
                      electricity involved. This is a manual and natural colon therapy that is gentle, relaxing, and
                      encourages feedback and dialogue between the client and hydrotherapist.
                      <p>
                        The gravity method colonic is the original and most natural way to perform a colon cleanse
                        because it allows the body to heal itself by ridding the colon of toxin build-up with the
                        natural forces of water and gravity. Although many clients are nervous for their first colonic
                        therapy session, most people say that the process was much easier than they expected and that
                        the therapy session felt relaxing and rejuvenating.
                      </p>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Grid>
        <div className="about-two">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-toilet" />
                  </div>
                  <p className="myth">Myth 1 Dependency</p>
                  <p className="about-myth">
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-shower" />
                  </div>
                  <p className="myth">Myth 2 Flushing out intestinal flora</p>
                  <p className="about-myth">
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-bug" />
                  </div>
                  <p className="myth">Myth 3 Infection</p>
                  <p className="about-myth">
                    Blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah
                    Blah blah blah Blah blah blah Blah blah
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-poo-storm" />
                  </div>
                  <p className="myth">Myth 4 Trauma</p>
                  <p className="about-myth">
                    Blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-haykal" />
                  </div>
                  <p className="myth">Myth 5 Pain during the procedure</p>
                  <p className="about-myth">
                    Blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah
                    blah blah Blah blah blah Blah blah blah
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-poo" />
                  </div>
                  <p className="myth">Myth 6 Unnecessary</p>
                  <p className="about-myth">
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
