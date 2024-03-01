import React, { useState, useEffect } from "react";
import "./Body.css";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import EmployeeList from "../EmployeeList/EmployeeList";
import NewEmployeeModal from "../NewEmployeeModal";
import axios from "axios";
import { API_URL } from "../Api/api";

const Body = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(null);

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
  const registeredEmployee = () => {
    // Assuming employees and resetState are defined somewhere
    return (
      <Container>
        <Row>
          <Col>
            <EmployeeList employees={employees} resetState={resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewEmployeeModal create={true} resetState={resetState} />
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div className="body">
      <main className="main-leave">
        <div className="select-leave">
          <div className="leave-dropdown">
            <select name="" id="" className="leave-section">
              <option disabled defaultValue="Select Leave">
                Selected Leave
              </option>
              <option value="Pending Leaves">Pending Leaves</option>
              <option value="Rejected Leaves">Rejected Leaves</option>
              <option value="Accepted Leaves">Accepted Leaves</option>
            </select>
          </div>
        </div>
        <div className="leaves">
          <Container>
            <Row>
              <Col>
                <div
                  className="my-div"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Registered Employee
                </div>
              </Col>
              <Col>
                <div className="my-div">Leave Requested</div>
              </Col>
            </Row>
          </Container>
          {show && registeredEmployee()}
        </div>
      </main>
    </div>
  );
};

export default Body;
