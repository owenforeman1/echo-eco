import React, { useState } from "react";
import "../styles/Account.css";

const Account = () => {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // Add logic to update profile
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
    alert("Password changed successfully!");
    // Add logic to change password
  };

  return (
    <div className="account-page">
      <h2>My Account</h2>

      {/* Profile Section */}
      <section className="account-section">
        <h3>Profile Information</h3>
        <form onSubmit={handleProfileSubmit} className="account-form">
          <div className="form-row">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="account-button">
            Update Profile
          </button>
        </form>
      </section>

      {/* Password Section */}
      <section className="account-section">
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordSubmit} className="account-form">
          <div className="form-row">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="account-button">
            Change Password
          </button>
        </form>
      </section>
    </div>
  );
};

export default Account;
