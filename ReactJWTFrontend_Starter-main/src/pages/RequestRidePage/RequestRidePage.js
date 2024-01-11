import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import GoogleMapComponent from "../../components/GoogleMaps/GoogleMaps";

const RequestRidePage = () => {
  const { makeRideRequest } = useContext(AuthContext);

  const requestInfo = {
    startLocation: { lat: 0, lng: 0 },
    endLocation: { lat: 0, lng: 0 },
    date: "",
    time: "",
    wheelchairAccess: "",
  };

  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    makeRideRequest,
    requestInfo
  );

  const handleMapClick = (e) => {
    const { latLng } = e;
    const location = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };}


  return (
    <div className="container">
      <h1>Request a Ride</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Start Location:
          <GoogleMapComponent
            location={formData.startLocation}
            onMapClick={handleMapClick}
          />
        </label>
        <label>
          End Location:
          <GoogleMapComponent
            location={formData.endLocation}
            onMapClick={handleMapClick}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pickup Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
        </label>
        <label>
            Wheelchair Accessible:{" "}
             <input type="checkbox" name="wheelchairAccessible" />
        </label>
        <button type="submit">Request Ride</button>
      </form>
    </div>
  );
};

export default RequestRidePage;
