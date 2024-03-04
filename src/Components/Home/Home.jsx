import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";

const Home = () => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Body />
      </div>
    </>
  );
};

export default Home;
