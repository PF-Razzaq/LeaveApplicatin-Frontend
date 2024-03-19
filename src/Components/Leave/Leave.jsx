import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { API_URL_LEAVE } from "../Api/api";

const Leave = (props) => {
  const [leaveData, setLeaveData] = useState([]);
  const storedUser = localStorage.getItem("loggedInUser");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

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

  const columns = [
    { field: "start_date", headerName: "Start Date", width: 170 },
    { field: "end_date", headerName: "End Date", width: 170 },
    { field: "days", headerName: "Days", width: 150 },
    { field: "leave_type", headerName: "Leave Type", width: 150 },
    { field: "reject_reason", headerName: "Reject Reason", width: 200 },
    {
      field: "status",
      headerName: "Status",
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
    <div style={{ height: 250, width: "90%", margin: "50px auto" }}>
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
