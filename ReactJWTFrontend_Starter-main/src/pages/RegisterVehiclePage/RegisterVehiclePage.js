import React from "react";

const RegisterVehiclePage = () => {
  const isProspectiveEmployee = localStorage.getItem("prospectiveEmployee") === "Yes";

  if (isProspectiveEmployee) {
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
  return <Redirect to "/HomePage" />

  );
};

export default RegisterVehiclePage;