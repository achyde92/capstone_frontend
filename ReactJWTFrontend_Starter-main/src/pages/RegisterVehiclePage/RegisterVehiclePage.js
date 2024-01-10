import React from "react";
import { Redirect } from "react-router-dom";

const RegisterVehiclePage = () => {
  const isProspectiveEmployee = localStorage.getItem("prospectiveEmployee") === "Yes";

  if (!isProspectiveEmployee) {
    return <Redirect to="/" />;
  }
    return (
      <div>
        <h1>Vehicle Registration</h1>
        {
            isProspectiveEmployee && (
                <div>
                  <label>
                    Make:{" "}
                    <input type="text" name="make" />
                  </label>
                  <label>
                    Model:{" "}
                    <input type="text" name="model" />
                  </label>
                  <label>
                    Year:{" "}
                    <input type="text" name="year" />
                  </label>
                  <label>
                    Wheelchair Accessible:{" "}
                    <input type="checkbox" name="wheelchairAccessible" />
                  </label>
                </div>
              )
            }
      </div>
    );
  }
};

export default RegisterVehiclePage;