import React from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Button } from "reactstrap";
import { MdPeopleAlt } from "react-icons/md";
import Body from "../Body/Body";
import PersonDetail from "../Person Detail/PersonDetail";
import LoginForm from "../Login/LoginForm";
import Leave from "../Leave/Leave";
import ApplyLeave from "../ApplyLeave/ApplyLeave";
import Home from "../Home/Home";
import AddEmployee from "../AddEmployee/AddEmployee";

const Sidebar = () => {
  return (
    <>
      <div className="main-div">
        <div className="left">
          <div className="sidebar">
            <main className="main">
              <div className="dashboard">
                <MdDashboard className="icon" />
                <h4>Dashboard</h4>
              </div>
              <div className="leave">
                <RiPagesLine className="icon" />
                <h4>Leave Section</h4>
              </div>
              <div className="employee">
                <MdPeopleAlt className="icon" />
                <h4>Employee Section</h4>
              </div>
            </main>
            <div className="logout">
              <Button color="danger">Logout</Button>
            </div>
          </div>
        </div>
        {/* <div className="right"><Body /></div> */}
        <div className="right">
          {/* <PersonDetail /> */}
          {/* <LoginForm /> */}
          {/* <Leave /> */}
          {/* <ApplyLeave /> */}
          {/* <Home /> */}
          <AddEmployee />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
