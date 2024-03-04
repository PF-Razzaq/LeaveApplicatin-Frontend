import React, { useState, useEffect } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import { API_URL1 } from "../Api/api";
import axios from "axios";
const Leave = (props) => {
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL1);
        setLeaveData(response.data); // Update this line
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  const createStudent = (e) => {
    e.preventDefault();
    axios.post(API_URL1, leaveData).then(() => {
      props.resetState();
      props.toggle();
    });
  };
  return (
    <>
      <div>
        {/* <Button className="ms-5 mt-5 px-5 py-3 fs-3">Apply For Leave</Button> */}
        <Row>
          <Col md={12} className="m-auto mt-5">
            <Table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Day(s)</th>
                  <th>Status</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {!leaveData || leaveData.length <= 0 ? (
                  <tr>
                    <td colSpan="6" align="center">
                      <b>Ops, no one here yet</b>
                    </td>
                  </tr>
                ) : (
                  leaveData.map((leaveData) => (
                    <tr key={leaveData.pk}>
                      <td>{leaveData.start_date}</td>
                      <td>{leaveData.end_date}</td>
                      <td>{leaveData.leave_type}</td>
                      <td>{leaveData.reason}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Leave;
