import React from "react";
import "./Header.css";
import { Button } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <h1>LMS</h1>
          <Button color="danger">Logout</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
