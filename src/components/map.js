import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const myLatLng = { lat: -25.363, lng: 131.044 };

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 40.670848,
      lng: -73.98586,
    },
    zoom: 15,
  };

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!',
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent lat={40.670848} lng={-73.98586} text={<i class="fas fa-map-marker-alt" />} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
