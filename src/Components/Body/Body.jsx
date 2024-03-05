import React, { useState, useEffect } from "react";
import "./Body.css";
import { Container, Row, Col } from "reactstrap";
import EmployeeList from "../EmployeeList/EmployeeList";
import NewEmployeeModal from "../NewEmployeeModal";
import axios from "axios";
import { API_URL } from "../Api/api";
import { useNavigate } from "react-router-dom";
import LeaveRequested from "../LeaveRequested/LeaveRequested";

const Body = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(true);

  const navigate = useNavigate();
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
    <div className="body">
      <main className="main-leave">
        <div className={`parent ${show ? "" : "d-none"}`}></div>
        <div className={`leaves ${show ? "" : "d-none"}`}>
          <Container className={`parent ${show ? "" : "hidden"}`}>
            <Row>
              <Col>
                <div
                  className="my-div"
                  onClick={() => {
                    navigate("/userrecord");
                  }}
                >
                  Registered Employee: {employees.length}
                </div>
              </Col>
              <Col>
                <div className="my-div" onClick={() => {}}>
                  Leave Requested
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      {<LeaveRequested />}
    </div>
  );
};

export default Body;
