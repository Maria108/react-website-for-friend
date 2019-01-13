import React, { Component } from 'react';
import './about.css';
import { Row, Col, Grid } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="main-div-colon picture-about">
            <div className="opacity-div">
              <Row>
                <Col xs={12} md={12}>
                  <div className="about-colon">
                    <h1>ABOUT COLONIC</h1>
                  </div>
                  <div>
                    <p className="info-about-colon">
                      The Gravity Method colonic, also known as colon hydrotherapy, uses gravity for the flow of water
                      to gently clean the colon from unwanted fecal matter, gas and mucus. No pressure, machines, or
                      electricity involved. This is a manual and natural colon therapy that is gentle, relaxing, and
                      encourages feedback and dialogue between the client and hydrotherapist.
                    </p>
                    <p className="info-about-colon-2">
                      The gravity method colonic is the original and most natural way to perform a colon cleanse because
                      it allows the body to heal itself by ridding the colon of toxin build-up with the natural forces
                      of water and gravity. Although many clients are nervous for their first colonic therapy session,
                      most people say that the process was much easier than they expected and that the therapy session
                      felt relaxing and rejuvenating.
                    </p>
                  </div>
                  <div className="mk-app-btn">
                    <button className="app-btn">BOOK NOW</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Grid>
        <div className="about-two">
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <div className="how-you-know">
                  <p>HOW DO YOU KNOW IT'S TIME FOR COLONIC</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-battery-quarter" />
                  </div>
                  <p className="myth">FATIGUE</p>
                  <p className="about-myth">
                    A lack of essential vitamins in the body can sap your energy, it can be the major factor in chronic
                    fatigue syndrome. If your digestive system isn’t able to draw all the nutrients from food, it misses
                    out on vital sustenance. An unhealthy colon can also have undigested food building up which blocks
                    the body’s ability to eliminate it as waste. This matter will turn toxic so by flushing through the
                    colon with water, colonic hydrotherapy can restore normal function. And the benefits of colonic
                    hydrotherapy for fatigue and depression don’t end there.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-wind" />
                  </div>
                  <p className="myth">BLOATING</p>
                  <p className="about-myth">
                    Colon cleanse is the top remedy to relieve gas and bloating. Colon hydrotherapy can help to treat
                    gas and bloating in a few ways: It is the safest and most effective method to remove bowel
                    obstructions, so that the colon may pass blocked fecal matter and release trapped gas.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-toilet" />
                  </div>
                  <p className="myth">CONSTIPATION</p>
                  <p className="about-myth">
                    With time, some unwanted fecal matter and toxic material may accumulate in the colon leading to
                    overdistention of the colon muscles resulting in chronic constipation. Although the colon has its
                    own way of cleansing these toxic materials, nowadays our diet, environment, low physical activity,
                    and stressful lifestyle may lead to dysfunction of this colon function. Colonic hydrotherapy is a
                    very effective and simple way to get rid of these toxins.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="far fa-meh-rolling-eyes" />
                  </div>
                  <p className="myth">SKIN ISSUES</p>
                  <p className="about-myth">
                    Practitioners and devotes of colonic agree, there is no clear and beautiful skin without a clean
                    colon. What happens in the colon is directly seen in the skin. Regular sessions with the hose and
                    clean diet can clear up acne, psoriasis and eczema, and even a single session can give an immediate
                    glow to the skin.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="fas fa-hippo" />
                  </div>
                  <p className="myth">FEELING HEAVY/SLUGGISH</p>
                  <p className="about-myth">
                    If you are feeling sluggish, constantly fighting off colds, flu and allergies, if you are craving
                    sugary foods, fighting a foggy brain, its a sign your body needs a cleanse/detox. Most clients
                    report feeling lighter, emptier, uplifted, cleansed, less bloated, and happier and more at ease.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="image-about-about">
                  <div className="poop-icon">
                    <i class="far fa-dizzy" />
                  </div>
                  <p className="myth">HEADACHE</p>
                  <p className="about-myth">
                    Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah
                    blah Blah blah blah Blah Blah blah blah
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid id="how-to-prepare">
          <div className="main-div-colon picture-about">
            <div className="opacity-div">
              <Row>
                <Col xs={12} md={12}>
                  <div className="about-colon">
                    <h1>HOW TO PREPARE</h1>
                  </div>
                  <div>
                    <p className="info-about-colon">Few days prior to colonic:</p>
                    <p className="info-about-colon">
                      Stay properly hydrated. Drink plenty of water and green vegetable juices, it'll help to hydrate
                      the body ad loosen the waste. Avoid caffein, alcohol and tobacco as it dehydrates the body and
                      creates inflammation.
                    </p>
                    <p className="info-about-colon-2">
                      Cut back on animal protein, dairy, fried foods, legumes and processed foods. Its best to consume
                      fresh fruits and veggies, salads, whole grains, veggie juices, soups for an easy and effective
                      release. Avoid any carbonated and bubbly drinks, as it creates bloating and gas and makes it
                      harder for the water to move through the colon.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default About;
