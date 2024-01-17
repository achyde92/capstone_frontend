import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
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
