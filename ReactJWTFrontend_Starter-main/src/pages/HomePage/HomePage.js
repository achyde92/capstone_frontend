import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import RequestRideList from "../RequestRidePage/RequestRideList";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [userBalance, setUserBalance] = useState(null);


  useEffect(() => {
    fetchCars();
  }, [token]);

  const fetchUserData = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUserBalance(response.data.balance);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchCars = async () => {
    try {
      let response = await axios.get("https://localhost:5001/api/cars/myCars", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setCars(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      {console.log(user)}
      <h1>Home Page for {user.userName}!</h1>
      <p>User Balance: {userBalance !== null ? `$${userBalance.toFixed(2)}` : "Loading..."}</p>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
        <RequestRideList></RequestRideList>
    </div>
  );
};

export default HomePage;
