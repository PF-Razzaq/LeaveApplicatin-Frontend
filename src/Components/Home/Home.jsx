import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import { API_URL } from "../Api/api";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []); // Empty dependency array ensures the effect runs once on mount

  const getEmployees = () => {
    axios.get(API_URL).then((res) => {
      setEmployees(res.data);
    });
  };

  const resetState = () => {
    getEmployees();
  };

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StudentList employees={employees} resetState={resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={resetState} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
