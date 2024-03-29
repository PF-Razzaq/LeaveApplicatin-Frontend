import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { API_URL_LEAVE } from "../Api/api";

const Leave = (props) => {
  const [leaveData, setLeaveData] = useState([]);
  const [approvedDays, setApprovedDays] = useState(0);
  const storedUser = localStorage.getItem("loggedInUser");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL_LEAVE);
        setLeaveData(response.data);

        // Calculate and log total days including only approved leaves
        const approvedLeaves = response.data.filter(
          (leave) => leave.employee === loggedInUser.id && leave.status === 1
        );
        const totalApprovedDays = approvedLeaves.reduce(
          (total, leave) => total + leave.days,
          0
        );
        setApprovedDays(totalApprovedDays);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  sessionStorage.setItem("approvedDays", approvedDays);

  const columns = [
    { field: "employee", headerName: <strong>ID</strong>, width: 100 },
    {
      field: "start_date",
      headerName: <strong>Start Date</strong>,
      width: 170,
    },
    { field: "end_date", headerName: <strong>End Date</strong>, width: 170 },
    {
      field: "total_days",
      headerName: <strong>Total Days</strong>,
      width: 150,
      valueGetter: (params) => params.row.days,
    },
    {
      field: "leave_type",
      headerName: <strong>Leave Type</strong>,
      width: 150,
    },
    {
      field: "reject_reason",
      headerName: <strong>Reject Reason</strong>,
      width: 200,
    },
    {
      field: "status",
      headerName: <strong>Status</strong>,
      width: 130,
      renderCell: (params) => (
        <span>
          {params.value === 0 && "Pending"}
          {params.value === 1 && "Approved"}
          {params.value === 2 && "Rejected"}
        </span>
      ),
    },
  ];

  return (
    <div
      style={{ height: 380, width: "90%", margin: "50px auto" }}
      className="userdatagrid"
    >
      <div>{approvedDays}</div>
      <DataGrid
        rows={leaveData.filter((leave) => leave.employee === loggedInUser.id)}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
      />
    </div>
  );
};

export default Leave;
