import React, { useState, useEffect } from "react";
import "./Body.css";
import { Container, Row, Col } from "reactstrap";
import EmployeeList from "../EmployeeList/EmployeeList";
import NewEmployeeModal from "../NewEmployeeModal";
import axios from "axios";
import { API_URL } from "../Api/api";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(true);
  const [record, setRecord] = useState(true);

  const navigate = useNavigate();
  const getEmployees = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleClickHide = () => {
    setShow(!show);
  };

  const resetState = () => {
    getEmployees();
  };

  useEffect(() => {
    resetState();
  }, []);

  const registeredEmployee = () => (
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

  return (
    <div className="body">
      <main className="main-leave">
        <div className={`parent ${show ? "" : "d-none"}`}>
          {/* Your leave dropdown code */}
        </div>
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
                <div className="my-div">Leave Requested</div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      {/* 
      <div className={`${!show ? "" : "d-none"}`}>
        <button
          onClick={handleClickHide}
          className="btn btn-primary px-5 py-2 ms-5"
        >
          Back
        </button>
        {registeredEmployee()}
      </div> */}
    </div>
  );
};

export default Body;
