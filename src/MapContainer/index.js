import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

 
  render() { 

    const style = {
    width: '40%',
    height: '50%',
    'padding-left': '2em',
    'padding-top': '2em'

  }
    return (
      <div class='map'>
      <Map google={this.props.google} zoom={14} style={style}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)