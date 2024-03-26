import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./LeaveRequested.css";

const LeaveRequestedRecord = ({ record }) => {
  const leaverecord = record.filter((data) => data.status !== 0);
  const columns = [
    { field: "employee", headerName: <strong>ID</strong>, width: 100 },
    {
      field: "start_date",
      headerName: <strong>Start Date</strong>,
      headerClassName: "headerCell",
      width: 150,
    },
    {
      field: "end_date",
      headerName: <strong>End Date</strong>,
      headerClassName: "headerCell",
      width: 150,
    },
    {
      field: "days",
      headerName: <strong>Days</strong>,
      headerClassName: "headerCell",
      width: 150,
    },
    {
      field: "leave_type",
      headerName: <strong>Leave Type</strong>,
      headerClassName: "headerCell",
      width: 150,
    },
    {
      field: "reject_reason",
      headerName: <strong>Reject Reason</strong>,
      headerClassName: "headerCell",
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
    <>
      <div
        style={{ height: 300, width: "100%", margin: "auto" }}
        className="userdatagrid"
      >
        <h2>Leave Record</h2>
        <DataGrid
          rows={leaverecord}
          columns={columns}
          pageSize={5}
          checkboxSelection={false}
        />
      </div>
    </>
  );
};

export default LeaveRequestedRecord;
