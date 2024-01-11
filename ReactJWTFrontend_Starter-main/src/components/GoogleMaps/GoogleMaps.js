import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 0, 
  lng: 0, 
};

const GoogleMapComponent = ({ location, onMapClick }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBSnHXSSYqrU5nm3kXBj8qVkkTLsmMrRvw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
        onClick={onMapClick}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
