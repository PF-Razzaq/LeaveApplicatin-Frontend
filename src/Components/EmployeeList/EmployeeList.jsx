import React, { useState } from "react";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ConfirmRemovalModal from "../ConfirmRemovalModal";
import NewEmployeeModal from "../NewEmployeeModal";
import { Link } from "react-router-dom";

const EmployeeList = (props) => {
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };
  const { employees } = props;

  const columns = [
    { field: "id", headerName: <strong>Employee Id</strong>, width: 110 },
    {
      field: "first_name",
      headerName: <strong>First Name</strong>,
      width: 150,
    },
    { field: "last_name", headerName: <strong>Last Name</strong>, width: 130 },
    { field: "email", headerName: <strong>Email</strong>, width: 180 },
    {
      field: "password",
      headerName: <strong>Password</strong>,
      width: 150,
      renderCell: (params) => {
        return (
          <input
            type={editable ? "text" : "password"}
            value={params.value}
            onDoubleClick={toggleEditable}
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "20px",
            }}
            title="Double Click to see the password"
            readOnly
          />
        );
      },
    },
    // { field: "birthday", headerName: "Birthday", width: 150 },
    // { field: "department", headerName: "Department", width: 150 },
    { field: "role", headerName: <strong>Role</strong>, width: 140 },
    {
      field: "status",
      headerName: <strong>Action</strong>,
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            <NewEmployeeModal
              create={false}
              employee={params.row}
              resetState={props.resetState}
            />
            &nbsp;&nbsp;
            <ConfirmRemovalModal
              id={params.row.id}
              resetState={props.resetState}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <div style={{ width: "90%", margin: "20px auto" }}>
          <div>
            <Typography variant="h5" gutterBottom>
              Employee Data
            </Typography>
            <DataGrid
              rows={employees}
              columns={columns}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
