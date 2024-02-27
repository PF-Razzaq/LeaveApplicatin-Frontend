import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import { API_URL } from "../Api/api";
import EmployeeList from "../EmployeeList/EmployeeList";
import NewEmployeeModal from "../NewEmployeeModal";

const Home = () => {
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
      <Container style={{ marginTop: "20px" }}>
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
    </>
  );
};

export default Home;
