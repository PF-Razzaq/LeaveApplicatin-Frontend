import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../Api/api";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";
import "./ApplyLeave.css";

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    leaveType: "",
    reason: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (props) => {
    try {
      const response = await axios.post(API_URL, formData);
      props.resetState();
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      props.resetState();
      console.error("Error submitting data:", error);
    }
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };
  return (
    <Container className="w-25">
      <h3 className="text-center mt-5">Apply For Leave</h3>

      <Form onSubmit={handleSubmit} action="post">
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="startDate">Start Date</Label>
              <Input
                type="date"
                name="startDate"
                id="startDate"
                value={defaultIfEmpty(formData.startDate)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="endDate">End Date</Label>
              <Input
                type="date"
                name="endDate"
                id="endDate"
                value={defaultIfEmpty(formData.endDate)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="leaveType">Leave Type</Label>
              <Input
                type="text"
                name="leaveType"
                id="leaveType"
                value={defaultIfEmpty(formData.leaveType)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="reason">Reason</Label>
              <Input
                type="text"
                name="reason"
                id="reason"
                value={defaultIfEmpty(formData.reason)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="w-100 bg-primary" type="submit">
          Request Leave
        </Button>
      </Form>
    </Container>
  );
};

export default ApplyLeave;
