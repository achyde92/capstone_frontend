import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import GoogleMapComponent from "../../components/GoogleMaps/GoogleMaps";

const RequestRidePage = () => {
  const { makeRideRequest } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const initialValues = {
    startLocation: { lat: 0, lng: 0 },
    endLocation: { lat: 0, lng: 0 },
    date: "",
    time: "",
    wheelchairAccessible: false,
  };

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    makeRideRequest,
    initialValues
  );

  const handleMapClick = (e) => {
    const { latLng } = e;
    const location = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };
    handleInputChange({
      target: {
        name: "startLocation",
        value: location,
      },
    });
  };

  const handleRequestSubmission = async () => {
    try {
      const response = await axios.post(
        "https://localhost:5001/api/riderequest",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.error(
        "Error submitting request:",
        error.response ? error.response.data : error.message
      );
      setError("Error submitting request. Please try again.");
    }
  };

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
          <input
            type="checkbox"
            name="wheelchairAccessible"
            checked={formData.wheelchairAccessible}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Request Ride</button>
      </form>
    </div>
  );
};

export default RequestRidePage;

