import React, { useState, useEffect } from "react";
import { Table, Row, Col, Button } from "reactstrap";
import { API_URL_LEAVE } from "../Api/api";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const LeaveRequested = () => {
  const navigate = useNavigate();
  const [leaveData, setLeaveData] = useState([]);
  const [show, setShow] = useState(true);

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
    console.log(
      "id, newStatus, rejectionStatus",
      id,
      newStatus,
      rejectionStatus
    );
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
      setShow(!show);
    } catch (error) {
      console.error("Error:", error.response || error.message || error);
    }
  };

  const columns = [
    { field: "start_date", headerName: "Start Date", width: 150 },
    { field: "end_date", headerName: "End Date", width: 150 },
    { field: "days", headerName: "Days", width: 100 },
    { field: "leave_type", headerName: "Leave Type", width: 150 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div>
          {params.row.status === 0 && (
            <>
              <Button
                className="btn btn-success me-2"
                onClick={() => handleAction(params.row.id, 1, null)}
              >
                Approve
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => handleAction(params.row.id, 2, null)}
              >
                Reject
              </Button>
            </>
          )}
          <input
            type="text"
            onBlur={(e) => handleAction(params.row.id, null, e.target.value)}
          />
        </div>
      ),
    },
    // { field: "reject_reason", headerName: "Reject Reason", width: 200 },
  ];

  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div style={{ width: "70%", margin: "50px auto" }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back
          </button>
          <DataGrid
            rows={leaveData}
            columns={columns}
            pageSize={5}
            autoHeight
          />
        </div>
      </div>
    </>
  );
};

export default LeaveRequested;
