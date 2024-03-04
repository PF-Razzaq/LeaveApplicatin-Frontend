import React from "react";
import { Table, Row, Col } from "reactstrap";
import ConfirmRemovalModal from "../ConfirmRemovalModal";
import NewEmployeeModal from "../NewEmployeeModal";

const EmployeeList = (props) => {
  const { employees } = props;
  return (
    <>
      <Table dark>
        <Row>
          <Col md={12} className="m-auto">
            <h2 className="mt-5 text-center bg-white text-dark py-3 fs-3">
              Employee Data
            </h2>
            <Table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Birthday</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!employees || employees.length <= 0 ? (
                  <tr>
                    <td colSpan="6" align="center">
                      <b>Ops, no one here yet</b>
                    </td>
                  </tr>
                ) : (
                  employees.map((employee) => (
                    <tr key={employee.pk}>
                      <td>{employee.first_name}</td>
                      <td>{employee.last_name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.password}</td>
                      <td>{employee.birthday}</td>
                      <td>{employee.department}</td>
                      <td>{employee.role}</td>
                      <td>
                        <NewEmployeeModal
                          create={false}
                          employee={employee}
                          resetState={props.resetState}
                        />
                        &nbsp;&nbsp;
                        <ConfirmRemovalModal
                          pk={employee.pk}
                          resetState={props.resetState}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Table>
    </>
  );
};

export default EmployeeList;
