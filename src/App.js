import React, { useEffect, useState } from "react";
import Login from "./Components/Login/LoginForm";
import Home from "./Components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import User from "./Components/User/User";
import UserRecord from "./Components/User/UserRecord";
import UserLeaveRecord from "./Components/User/UserLeaveRecord";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <>
            {JSON.parse(localStorage.getItem("allEmployees")) && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/userrecord" element={<UserRecord />} />
                <Route path="/userleaverecord" element={<UserLeaveRecord />} />
              </>
            )}
          </>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
