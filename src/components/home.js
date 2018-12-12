import React, { Component } from 'react';
import './home.css';
import { Grid } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Grid>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
          or information.
        </p>
      </Grid>
    );
  }
}

export default Home;
