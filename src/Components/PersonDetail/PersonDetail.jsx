import React, { useState } from "react";
import "./PersonDetail.css";

const PersonDetail = (props) => {
  const [editable, setEditable] = useState(true);
  const userProfile = JSON.parse(localStorage.getItem("loggedInUser"));

  const togglePassword = () => {
    setEditable(!editable);
  };
  const leavesDays = sessionStorage.getItem("approvedDays");
  console.log("leavesDays", leavesDays);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">User Profile</h1>
      <div className="row">
        <div className="">
          <div className="employeedetail">
            <div className="row mb-3">
              <div className="record-section">
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
              <div className="record-section">
                <h4>Name:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {userProfile.first_name} {userProfile.last_name}
                </h4>
              </div>
              <div className="record-section">
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
              <div className="record-section">
                <h4>Password:</h4>
                <input
                  type={editable ? "password" : "text"}
                  value={userProfile.password}
                  onDoubleClick={togglePassword}
                  title="Double Click to Show the Password"
                  className="text-secondary text-center"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "14px",
                    borderRadius: "4px",
                    border: "none",
                    fontSize: "20px",
                    outline: "none",
                    width: "280px",
                  }}
                  readOnly
                ></input>
              </div>
              <div className="record-section">
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
              <div className="record-section">
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
              <div className="record-section">
                <h4>Approved Leaves:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {leavesDays}
                </h4>
              </div>
              <div className="record-section">
                <h4>Total Leaves:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {24}
                </h4>
              </div>
              <div className="record-section">
                <h4>Pending Leaves:</h4>
                <h4
                  className="text-secondary"
                  style={{
                    background: "rgb(189, 164, 164)",
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  {24 - leavesDays}
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
