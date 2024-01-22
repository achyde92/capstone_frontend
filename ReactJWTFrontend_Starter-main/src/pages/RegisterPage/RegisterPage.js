import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    UserName: "",
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    IsEmployee: false,
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    registerUser,
    defaultValues
  );

  console.log("Form Data", formData);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="UserName"
            value={formData.UserName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="Password"
            name="Password"
            value={formData.Password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Prospective Employee: {" "}
          <input
          type="checkbox"
          name="IsEmployee"
          value={formData.IsEmployee}
          onChange={handleInputChange}
          />
        </label>
        <button>Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
