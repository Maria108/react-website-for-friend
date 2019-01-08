import React, { Component } from 'react';
import './customers.css';
import { Grid } from 'react-bootstrap';

class Customers extends Component {
  render() {
    return (
      <div>
        <Grid align="center">
          <div class="customers-main">
            <Grid>
              <div className="top-review">
                <p>-This is amazing. Feel so much better. Lena is the best therapist in the world!-</p>
                <h1 className="testimon">-Maria A-</h1>
              </div>
              <div className="custom-info">
                <p>
                  This is amazing. Feel so much better. Lena is the best therapist in the world! This is amazing. Feel
                  so much better.
                </p>
                <h1 className="testimon">-Sasha N-</h1>
              </div>
              <div className="custom-info">
                <p>
                  This is amazing. Feel so much better. Lena is the best therapist in the world! This is amazing. Feel
                  so much better. This is amazing. Feel so much better.
                </p>
                <h1 className="testimon">-Sasha N-</h1>
              </div>
              <div className="custom-info">
                <p>
                  This is amazing. Feel so much better. Lena is the best therapist in the world! This is amazing. Feel
                  so much better. This is amazing. Feel so much better. Lena is the best therapist in the world! This is
                  amazing. Feel so much better.
                </p>
                <h1 className="testimon">-Sasha N-</h1>
              </div>
            </Grid>
          </div>
          <div class="customers-main">
            <Grid>
              <div className="custom-info">
                <p>This is amazing. Feel so much better. Lena is the best therapist in the world!</p>
                <h1 className="testimon">-Karlee Clos-</h1>
              </div>
              <div className="custom-info">
                <p>This is amazing. Feel so much better. Lena is the best therapist in the world!</p>
                <h1 className="testimon">-Karlee Clos-</h1>
              </div>
              <div className="custom-info">
                <p>This is amazing. Feel so much better. Lena is the best therapist in the world!</p>
                <h1 className="testimon">-Karlee Clos-</h1>
              </div>
            </Grid>
          </div>
          <div class="customers-main">
            <Grid>
              <div className="custom-info">
                <p>This is amazing. Feel so much better. Lena is the best therapist in the world!</p>
                <h1 className="testimon">-Ashley Gram-</h1>
              </div>
            </Grid>
          </div>
          <div class="customers-main">
            <Grid>
              <div className="custom-info">
                <p>This is amazing. Feel so much better. Lena is the best therapist in the world!</p>
                <h1 className="testimon">-Park S-</h1>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Customers;
