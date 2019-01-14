import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './contacts.css';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const mapStyles = {
  width: '90%',
  height: '70%',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div style={{ height: '70vh', width: '100%' }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 40.6708484,
            lng: -73.98586,
          }}
        >
          <Marker onClick={this.onMarkerClick} />
          <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
            <div>
              <h4 className="marker-name">Park Slope Colonics</h4>
              <h4>313 7th St Brooklyn</h4>
              <BrowserRouter>
                <Link className="link-to-direction" to="/map">
                  Get Directions
                </Link>
              </BrowserRouter>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
