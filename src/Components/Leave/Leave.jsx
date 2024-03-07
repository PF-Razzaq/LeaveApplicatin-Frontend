import React, { useState, useEffect } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import { API_URL_LEAVE } from "../Api/api";
import axios from "axios";
const Leave = (props) => {
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL_LEAVE);
        setLeaveData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Row>
          <Col md={12} className="m-auto mt-5">
            <Table>
              <thead>
                <tr>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Days</th>
                  <th>Leave Type</th>
                  <th>Reason</th>
                  <th>Status</th>
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
                      <td>{leaveData.days}</td>
                      <td>{leaveData.leave_type}</td>
                      <td>{leaveData.reason}</td>
                      <td>
                        {leaveData.status === 0 && (
                          <Button className="btn btn-warning">Padding</Button>
                        )}
                        {leaveData.status === 1 && (
                          <Button className="btn btn-success" disabled>
                            Approved
                          </Button>
                        )}
                        {leaveData.status === 2 && (
                          <Button className="btn btn-danger" disabled>
                            Rejected
                          </Button>
                        )}
                      </td>
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
