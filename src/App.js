import React, { useEffect, useState } from "react";
import Login from "./Components/Login/LoginForm";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import User from "./Components/User/User";
import UserRecord from "./Components/User/UserRecord";
import UserLeaveRecord from "./Components/User/UserLeaveRecord";
import Layout from "./Components/Layout";
import LeaveRequested from "./Components/LeaveRequested/LeaveRequested";
import axios from "axios";
import { API_URL } from "./index";
import UserProfile from "./Components/PersonDetail/UserProfile";
import Todo from "./Page/Todo/Todo";
import WheaterApp from "./Page/WheaterApp/WheaterApp";

const App = (props) => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const matchingAdmin = employees.find((data) => data.role === "Admin");

  const matchingUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* <Route path="/todo" element={<Todo />} /> */}
            {/* <Route path="/weatherApp" element={<WheaterApp />} /> */}
            <Route path="/login" element={<Login />} />
            {JSON.parse(localStorage.getItem("allEmployees")) && (
              <>
                {!matchingUser && (
                  <>
                    <Route path="/home" element={<Home />} />
                    <Route
                      path="/leaverequested"
                      element={<LeaveRequested />}
                    />
                    <Route path="/userrecord" element={<UserRecord />} />
                  </>
                )}

                {matchingUser && (
                  <>
                    <Route path="/user" element={<User />} />
                    <Route
                      path="/userleaverecord"
                      element={<UserLeaveRecord />}
                    />
                    <Route path="/userProfile" element={<UserProfile />} />
                  </>
                )}
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
