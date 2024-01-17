import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
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
        <Marker
          position={location}
          onClick={() => {
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

