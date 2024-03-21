import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL_LEAVE } from "../Api/api";
import Header from "../Header/Header";
import SidebarUser from "../Sidebar/SidebarUser";
import Leave from "../Leave/Leave";
import UserLeaveSection from "./UserLeaveSection";
import "./User.css";
import Footer from "../Footer/Footer";

const User = () => {
  const [leaves, setLeaves] = useState([]);

  const getLeaves = async () => {
    try {
      const res = await axios.get(API_URL_LEAVE);
      setLeaves(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const resetState = () => {
    getLeaves();
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
    <>
      <div className="user">
        <Header className="user-header" />
        <div className="d-flex text-center ">
          <SidebarUser />
          <UserLeaveSection className="user-leave-record" leaves={leaves} />
        </div>
      </div>
      <div className="userfooter">
        <Footer />
      </div>
    </>
  );
};

export default User;
