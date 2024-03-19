import React from "react";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ConfirmRemovalModal from "../ConfirmRemovalModal";
import NewEmployeeModal from "../NewEmployeeModal";

const EmployeeList = (props) => {
  const { employees } = props;

  const columns = [
    { field: "id", headerName: "Employee Id", width: 130 },
    { field: "first_name", headerName: "First Name", width: 150 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "password", headerName: "Password", width: 150 },
    { field: "birthday", headerName: "Birthday", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "status",
      headerName: "Action",
      width: 150,
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
        <div style={{ width: "70%" }}>
          <div>
            <Typography variant="h5" gutterBottom>
              Employee Data
            </Typography>
            <DataGrid
              rows={employees}
              columns={columns}
              pageSize={5}
              autoHeight
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
