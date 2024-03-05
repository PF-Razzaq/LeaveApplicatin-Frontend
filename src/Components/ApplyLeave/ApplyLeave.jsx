import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL_LEAVE } from "../Api/api";
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

const ApplyLeave = (props) => {
  const [formData, setFormData] = useState({
    id: 0,
    start_date: "",
    end_date: "",
    leave_type: "",
    reason: "",
  });

  useEffect(() => {
    if (props.apply_leave) {
      const { id, start_date, end_date, leave_type, reason } =
        props.apply_leave;
      setFormData({
        id,
        start_date,
        end_date,
        leave_type,
        reason,
      });
    }
  }, [props.apply_leave]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData0", formData);

    try {
      console.log("formData1", formData);
      await axios.post(API_URL_LEAVE, formData);
      console.log("formData2", formData);
      props.resetState();
      props.toggle();
      console.log("Data submitted successfully:");
    } catch (error) {
      console.log("formData3", formData);

      props.resetState();
      console.error("Error submitting data:", error);
    }
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  const leaveOptions = ["Sick", "Casual", "Annual"];
  return (
    <Container>
      <Form onSubmit={handleSubmit} method="post">
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="start_date">Start Date</Label>
              <Input
                type="date"
                name="start_date"
                id="start_date"
                value={defaultIfEmpty(formData.start_date)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="end_date">End Date</Label>
              <Input
                type="date"
                name="end_date"
                id="end_date"
                value={defaultIfEmpty(formData.end_date)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="leave_type">Leave Type</Label>
              <Input
                type="select"
                name="leave_type"
                id="leave_type"
                value={defaultIfEmpty(formData.leave_type)}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Leave Type
                </option>
                {leaveOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
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
