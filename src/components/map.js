import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="map-icon">{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 40.670848,
      lng: -73.98586,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={40.670848} lng={-73.98586} text={<i class="fas fa-map-marker-alt" />} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
