import React, { useState } from "react";
import "./PersonDetail.css";

const PersonDetail = (props) => {
  const [show, setShow] = useState(false);
  const userProfile = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">User Profile</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="employeedetail">
            <div className="row mb-3">
              <div className="col-md-6">
                <h4>First Name:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.first_name}
                </h4>
              </div>
              <div className="col-md-6">
                <h4>Last Name:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.last_name}
                </h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <h4>ID:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.id}
                </h4>
              </div>
              <div className="col-md-6">
                <h4>Email:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.email}
                </h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <h4>Password:</h4>
                <input
                  type="password"
                  value={userProfile.password}
                  className="text-secondary text-center"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "14px",
                    borderRadius: "4px",
                    border: "none",
                    outline: "none",
                    width: "300px",
                  }}
                  readOnly
                ></input>
              </div>
              <div className="col-md-6">
                <h4>DOB:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.birthday}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4>Role:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.role}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
