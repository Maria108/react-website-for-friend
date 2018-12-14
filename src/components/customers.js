import React, { Component } from 'react';
import './customers.css';
import { Grid } from 'react-bootstrap';

class Customers extends Component {
  render() {
    return (
      <div class="customers-main">
        <Grid>
          <div className="custom-info">
            <h1>Maria A</h1>
            <p>This is amazing. Feel so much better. Lena is the best therapist in the world!</p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Customers;
