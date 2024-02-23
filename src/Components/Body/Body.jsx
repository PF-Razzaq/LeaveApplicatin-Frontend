import React from "react";
import "./Body.css";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const Body = () => {
  return (
    <>
      <div className="body">
        <main className="main-leave">
          <div className="select-leave">
            <Button className="add-employee" color="danger">
              Add Employee
            </Button>
            <div className="leave-dropdown">
              <select name="" id="" className="leave-section">
                <option selected disabled value="Select Leave">
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
                  <div className="my-div">Registered Employee</div>
                </Col>
                <Col>
                  <div className="my-div">Leave Requested</div>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </>
  );
};

export default Body;
