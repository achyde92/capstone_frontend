import React, { useState } from "react";

const RequestRideList = () => {
  const requestedRides = [
    { 
        id: 1,
        startLocation: "A",
        endLocation: "B", 
        date: "2022-01-01", 
        time: "12:00 PM" },
  ];

  const [acceptedRides, setAcceptedRides] = useState([]);

  const handleAcceptRide = (rideId) => {
    const acceptedRide = requestedRides.find((ride) => ride.id === rideId);
    setAcceptedRides([...acceptedRides, acceptedRide]);
  };

  return (
    <div className="container">
      <h1>Requested Rides</h1>
      <table>
        <thead>
          <tr>
            <th>Ride ID</th>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requestedRides.map((ride) => (
            <tr key={ride.id}>
              <td>{ride.id}</td>
              <td>{ride.startLocation}</td>
              <td>{ride.endLocation}</td>
              <td>{ride.date}</td>
              <td>{ride.time}</td>
              <td>
                <button onClick={() => handleAcceptRide(ride.id)}>Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Accepted Rides</h2>
      <table>
        <thead>
          <tr>
            <th>Ride ID</th>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {acceptedRides.map((ride) => (
            <tr key={ride.id}>
              <td>{ride.id}</td>
              <td>{ride.startLocation}</td>
              <td>{ride.endLocation}</td>
              <td>{ride.date}</td>
              <td>{ride.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestRideList;
