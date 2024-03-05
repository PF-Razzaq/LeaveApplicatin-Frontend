import React from "react";
import { useNavigate } from "react-router-dom";
import { Col } from "reactstrap";

const UserLeaveSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Col>
        <div
          className="my-div"
          style={{
            width: "380px",
            backgroundColor: "gray",
            display: "flex",
            padding: "80px 60px",
            margin: "30px 0px 0px 50px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/useleaverecord");
            }}
          >
            Leave Applied
          </h4>
        </div>
      </Col>
    </>
  );
};

export default UserLeaveSection;
