import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../Api/api";
import Header from "../Header/Header";
import SidebarUser from "../Sidebar/SidebarUser";
import Leave from "../Leave/Leave";
import UserLeaveSection from "./UserLeaveSection";

const User = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const resetState = () => {
    getEmployees();
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex">
        <SidebarUser />
        <UserLeaveSection />
      </div>
    </>
  );
};

export default User;
