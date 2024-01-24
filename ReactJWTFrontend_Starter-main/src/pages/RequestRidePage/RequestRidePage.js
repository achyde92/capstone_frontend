import React, { useContext, useState } from "react";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";
import GoogleMapComponent from "../../components/GoogleMaps/GoogleMaps";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

const RequestRidePage = () => {
  const [user, token] = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    startLocation: { lat: 0, lng: 0 },
    endLocation: { lat: 0, lng: 0 },
    date: "",
    time: "00:00:00",
    status: "Pending",
    isAccepted: false,
    wheelchairAccessible: false,
  };

  const handleRequestSubmission = async () => {
    try {
      console.log("FormData:", formData);
      const response = await axios.post(
        "https://localhost:5001/api/riderequest",
          formData,
          {
            headers: {
            Authorization: "Bearer " + token,
          },
        });
        navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error submitting request:",
        error.response ? error.response.data : error.message
      );
      setError("Error submitting request. Please try again.");
    }
  };
  
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    handleRequestSubmission,
    initialValues
  );

  const handleMapClick = (e) => {
    const { latLng } = e;
    const location = {
      latitude: latLng.lat(),
      longitude: latLng.lng(),
    };
    handleInputChange({
      target: {
        name: "startLocation",
        value: location,
      },
    });
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

