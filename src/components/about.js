import React, { Component } from 'react';
import './about.css';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about pic-one">
          <Grid>
            <div className="about-info">
              <h1>What is Gravity Colon Hydrotherapy?</h1>
              <p>
                Gravity Colon Hydrotherapy uses the natural flow of gravity to introduce water into the body. Using the
                latest in water filtration technology, our custom-made treatment rooms use ultra-purified water to
                dissolve and carry wastes away. Our team is certified in the Woods Method of Gravity Colonics and is
                additionally trained in-house before joining our team. Sessions generally last 45 minutes to one hour.
              </p>
            </div>
          </Grid>
        </div>
        <div className="about pic-two">
          <Grid>
            <div className="about-info">
              <h1>Why Choose Colon Hydrotherapy?</h1>
              <p>
                Gravity Colon Hydrotherapy uses the natural flow of gravity to introduce water into the body rather than
                using a machine which unnaturally forces water into the colon. Each individual is unique and using
                Gravity Colon Hydrotherapy allows our therapists to create a more personalized and custom session for
                you. Other methods relying on machines rather than natural gravitational forces lose the personalization
                necessary to achieve your desired results.
              </p>
            </div>
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

export default About;
