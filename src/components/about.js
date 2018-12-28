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
            </div>
          </Grid>
        </div>
        <div className="about pic-two">
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
