import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth"


const RequestRideList = () => {
  const [user, token] = useAuth();
  const [requestedRides, setRequestedRides] = useState([
    {
      id: "",
      startLocation: "",
      endLocation: "",
      date: "",
      time: "",
      status: "",
    },
  ]);

  const [acceptedRides, setAcceptedRides] = useState([]);
  const [completedRides, setCompletedRides] = useState([]);
  const navigate = useNavigate();

  const handleAcceptRide = async (rideId) => {
    try {
      const acceptedRide = requestedRides.find((ride) => ride.id === rideId);
  
      console.log("Accepted Ride:", acceptedRide);
  
      setRequestedRides((prevRequestedRides) =>
        prevRequestedRides.filter((ride) => ride.id !== rideId)
      );
  
      setAcceptedRides((prevAcceptedRides) => [...prevAcceptedRides, acceptedRide]);
  
      const response = await axios.post(
        `https://localhost:5001/api/riderequests/accept/${rideId}`,
        null,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("Accept Ride Response:", response.data);
    } catch (error) {
      console.error(
        "Error accepting ride:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleReviewClick = () => {
    navigate("/review-page");
  };

  useEffect(() => {
    const currentDate = new Date();

    const calculateCompletedRides = () => {
      const completedRidesData = requestedRides.filter((ride) => {
        const scheduledDate = new Date(ride.date + " " + ride.time);
        const timeDifference = scheduledDate.getTime() - currentDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        return daysDifference >= 2;
      });

      setCompletedRides(completedRidesData);
    };

    calculateCompletedRides();
  }, [requestedRides]); 
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

      <h2>Completed Rides</h2>
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
          {completedRides.map((ride) => (
            <tr key={ride.id}>
              <td>{ride.id}</td>
              <td>{ride.startLocation}</td>
              <td>{ride.endLocation}</td>
              <td>{ride.date}</td>
              <td>{ride.time}</td>
              <td>
                <button onClick={handleReviewClick}>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestRideList;