import React, { Component } from 'react';
import './blog.css';
import { Grid } from 'react-bootstrap';

class Blog extends Component {
  render() {
    return (
      <div>
        <Grid>
          <div className="main-div blog">
            <p className="coming-soon">coming soon...</p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Blog;
