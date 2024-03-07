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

  const handleAction = async (id, newStatus) => {
    try {
      const existingLeaveData = leaveData.find((data) => data.id === id);
      console.log("existingLeaveData", existingLeaveData);
      const statusUpdate = {
        status: newStatus,
        start_date: existingLeaveData.start_date,
        end_date: existingLeaveData.end_date,
        leave_type: existingLeaveData.leave_type,
        reason: existingLeaveData.reason,
      };
      console.log("statusUpdate", statusUpdate);
      const response = await axios.put(`${API_URL_LEAVE}${id}`, statusUpdate);
      console.log("LEAVEDATA76", response);

      const updatedResponse = await axios.get(API_URL_LEAVE);
      console.log("LEAVEDATA", updatedResponse);

      setLeaveData(updatedResponse.data);
    } catch (error) {
      console.error("Error:", error.response || error.message || error);
    }
  };

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
                  <th>Action</th>
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
                          <>
                            <Button
                              className="btn btn-success me-2"
                              onClick={() => handleAction(leaveData.id, 1)}
                            >
                              Approve
                            </Button>
                            <Button
                              className="btn btn-danger"
                              onClick={() => handleAction(leaveData.id, 2)}
                            >
                              Reject
                            </Button>
                          </>
                        )}
                        {leaveData.status === 1 && (
                          <Button className="btn btn-warning" disabled>
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

export default LeaveRequested;
