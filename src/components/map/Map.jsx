import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
