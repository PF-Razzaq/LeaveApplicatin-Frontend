import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Zoom, toast } from "react-toastify";

import { Col, Container, Row } from "reactstrap";

import { MdDashboard } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Button } from "reactstrap";
import { MdPeopleAlt } from "react-icons/md";
import EmployeeList from "../EmployeeList/EmployeeList";
import axios from "axios";
import { API_URL } from "../Api/api";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const matchingAdmin = () => {
    employees.find((data) => data.role === "Admin");
  };

  const resetState = () => {
    getEmployees();
  };

  useEffect(() => {
    resetState();
  }, []);
  return (
    <>
      <div className="main-div">
        <div className="left">
          <div className="sidebar">
            <main className="main">
              <div
                className="dashboard"
                onClick={() => {
                  navigate("/user");
                }}
              >
                <MdDashboard className="icon" />
                <h4>Dashboard</h4>
              </div>
              <div
                className="leave"
                onClick={() => {
                  navigate("/useleaverecord");
                }}
              >
                <RiPagesLine className="icon" />
                <h4>Leave Section</h4>
              </div>
            </main>
            <div className="logout">
              <Button
                color="danger"
                onClick={() => {
                  toast.warn(`Logging Out`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                  });
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
