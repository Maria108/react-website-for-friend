import React, { Component } from 'react';
import './home.css';
import { Grid } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div class="home-main">
        <Grid>
          <div className="main-info">
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
              content or information.
            </p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
