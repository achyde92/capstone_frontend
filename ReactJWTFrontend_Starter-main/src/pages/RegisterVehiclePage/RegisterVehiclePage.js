import React, { useState } from "react";
import axios from "axios";

const RegisterVehiclePage = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    make: "",
    model: "",
    year: "",
    wheelchairAccessible: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setVehicleInfo({
      ...vehicleInfo,
      [name]: inputValue,
    });
  };

  const handleRegisterVehicle = async () => {
    try {
      const response = await axios.post("https://localhost:5001/api/vehicle", vehicleInfo);
      console.log("Vehicle registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering the vehicle:", error);
    }
  };

  return (
    <div>
      <h1>Vehicle Registration</h1>
      <div>
        <label>
          Make: <input type="text" name="make" onChange={handleInputChange} />
        </label>
        <label>
          Model: <input type="text" name="model" onChange={handleInputChange} />
        </label>
        <label>
          Year: <input type="text" name="year" onChange={handleInputChange} />
        </label>
        <label>
          Wheelchair Accessible:
          <input
            type="checkbox"
            name="wheelchairAccessible"
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleRegisterVehicle}>Register</button>
      </div>
    </div>
  );
};

export default RegisterVehiclePage;