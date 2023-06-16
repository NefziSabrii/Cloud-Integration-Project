import React from 'react';
import Map from './components/map/Map';

import './App.css';

const location = {
  address: 'Centre-ville de Tunis',
  lat: 36.8065,
  lng: 10.1815,
};


const App = () => (
  <div className="App">
    <h1>Contact Page</h1>
    <Map location={location} zoomLevel={17} />
  </div>
);

export default App;
