import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RequestRide = () => {
  const { makeRideRequest } = useContext(AuthContext);

  const requestInfo = {
    startLocation: "",
    endLocation: "",
    date: "",
    time: "",
  };

  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    makeRideRequest,
    requestInfo
  );

  return (
    <div className="container">
      <h1>Request a Ride</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Start Location:
          <input
            type="text"
            name="startLocation"
            value={formData.startLocation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Location:
          <input
            type="text"
            name="endLocation"
            value={formData.endLocation}
            onChange={handleInputChange}
          />
        </label>
        <label>
        <input
            type="date"
            name="Date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
        <input
            type="time"
            name="Pickup Time"
            value={formData.time}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Request Ride</button>
      </form>
    </div>
  );
};

export default RequestRide;
