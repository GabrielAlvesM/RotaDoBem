import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (

  <MapViewDirections
    origin={origin}
    destination={destination}
    onReady={onReady}
    apikey="AIzaSyAyeNszvaP42ZPHR4Xho4cBTYShmFg8gNI"
    strokeWidth={6}
    strokeColor = "#20c997"
  />
);
export default Directions;
