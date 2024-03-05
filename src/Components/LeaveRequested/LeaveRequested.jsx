import React, { useState, useEffect } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import { API_URL_LEAVE } from "../Api/api";
import axios from "axios";

const LeaveRequested = () => {
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
                  <th>Leave Type</th>
                  <th>Reason</th>
                  <th>Action</th>
                  <th>Reject Reason</th>
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
                      <td>
                        <button className="btn btn-success me-2">
                          Approved
                        </button>
                        <button className="btn btn-danger">Reject</button>
                      </td>
                      <td>
                        <input type="text" />
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

export default LeaveRequested;
