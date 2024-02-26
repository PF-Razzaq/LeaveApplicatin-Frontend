import React from "react";
import { Table, Row, Col, Button } from "reactstrap";

const Leave = () => {
  // Sample data for the table
  const leaveData = [
    {
      type: "Vacation",
      days: 5,
      status: "Approved",
      detail: "Enjoying time off",
    },
    // Add more rows as needed
  ];

  return (
    <>
      <div>
        <Button className="ms-5 mt-5 px-5 py-3 fs-3">Apply For Leave</Button>
        <Row>
          <h2 className="col-md-6 m-auto text-center mt-5 mb-4 ">Name</h2>

          <Col md={8} className="m-auto">
            <Table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Day(s)</th>
                  <th>Status</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {leaveData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.type}</td>
                    <td>{data.days}</td>
                    <td>{data.status}</td>
                    <td>{data.detail}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Leave;
