import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table } from "reactstrap";
import { API_URL_LEAVE } from "../Api/api";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import LeaveRequestedRecord from "./LeaveRequestedRecord";

const LeaveRequested = () => {
  const navigate = useNavigate();
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

  const handleAction = async (id, newStatus, rejectionStatus) => {
    try {
      const existingLeaveData = leaveData.find((data) => data.id === id);
      const statusUpdate = {
        status: newStatus !== null ? newStatus : existingLeaveData.status,
        start_date: existingLeaveData.start_date,
        end_date: existingLeaveData.end_date,
        leave_type: existingLeaveData.leave_type,
        reason: existingLeaveData.reason,
        reject_reason:
          rejectionStatus !== null ? rejectionStatus : existingLeaveData.reject,
      };

      const response = await axios.put(`${API_URL_LEAVE}${id}`, statusUpdate);

      const updatedResponse = await axios.get(API_URL_LEAVE);
      setLeaveData(updatedResponse.data);
      let updatedLeaveData = leaveData;
      if (newStatus === 1 || newStatus === 2) {
        updatedLeaveData = leaveData.filter((data) => data.id !== id);
      }
      setLeaveData(updatedLeaveData);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.response || error.message || error);
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Row style={{ width: "70%", margin: "50px auto" }}>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/home");
              }}
            >
              Back
            </button>
            <Col md={12} className="m-auto mt-5">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Days</th>
                    <th>Leave Type</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Reject Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {!leaveData || leaveData.length <= 0 ? (
                    <tr>
                      <td colSpan="7" align="center">
                        <strong>Ops, No Requested any leave</strong>
                      </td>
                    </tr>
                  ) : (
                    leaveData.map((leaveData) => (
                      <tr
                        key={leaveData.pk}
                        style={{
                          display:
                            leaveData.status === 0 ? "table-row" : "none",
                        }}
                      >
                        <td>{leaveData.start_date}</td>
                        <td>{leaveData.end_date}</td>
                        <td>{leaveData.days}</td>
                        <td>{leaveData.leave_type}</td>
                        <td>
                          {leaveData.status === 0 && <span>Pending</span>}
                          {leaveData.status === 1 && <span>Approved</span>}
                          {leaveData.status === 2 && <span>Rejected</span>}
                        </td>
                        <td>
                          {leaveData.status === 0 && (
                            <>
                              <Button
                                variant="success"
                                className="me-2 bg-success"
                                onClick={() =>
                                  handleAction(leaveData.id, 1, null)
                                }
                              >
                                Approve
                              </Button>
                              <Button
                                className="me-2 bg-danger"
                                variant="danger"
                                onClick={() =>
                                  handleAction(leaveData.id, 2, null)
                                }
                              >
                                Reject
                              </Button>
                            </>
                          )}
                        </td>
                        <td>
                          <input
                            type="text"
                            onBlur={(e) => {
                              e.preventDefault();
                              handleAction(leaveData.id, null, e.target.value);
                            }}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Col>
          </div>
          <LeaveRequestedRecord record={leaveData} />
        </Row>
      </div>
    </>
  );
};

export default LeaveRequested;
