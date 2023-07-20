import React, { useState, useContext } from "react";
import JoblyApi from "../helper/api";
import UserContext from "./common/userContext";
import Alert from "./common/alert";

function Profile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      let updatedUser = await JoblyApi.updateProfile(
        currentUser.username,
        profileData
      );

      if (updatedUser.errors) {
        setFormErrors(updatedUser.errors);
        setFormSuccess(""); // Clear any previous success message
      } else {
        setFormErrors([]);
        setFormSuccess("Profile updated successfully!"); // Set the success message
        setCurrentUser(updatedUser);
      }
    } catch (err) {
      setFormErrors([err.message]);
    }
  };

  return (
    <div>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <p>{currentUser.username}</p>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name:</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        <label>Confirm password to make changes:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {formErrors.length > 0 && <Alert type="error" messages={formErrors} />}
        {formSuccess && <Alert type="success" messages={[formSuccess]} />}

        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
