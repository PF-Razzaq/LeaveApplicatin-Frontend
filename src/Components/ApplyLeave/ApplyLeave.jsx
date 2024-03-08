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
    days: "",
    leave_type: "",
    reason: "",
  });

  useEffect(() => {
    if (props.apply_leave) {
      const { id, start_date, end_date, days, leave_type, reason } =
        props.apply_leave;
      setFormData({
        id,
        start_date,
        end_date,
        days,
        leave_type,
        reason,
      });
    }
  }, [props.apply_leave]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handeDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
      days: calculateDays(formData.start_date, date),
    });
  };

  const calculateDays = (startDate, endDate) => {
    const days = Array.from(
      {
        length:
          (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) + 1,
      },
      (_, index) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + index);
        return currentDate.getDay() !== 6 && currentDate.getDay() !== 0 ? 1 : 0;
      }
    ).reduce((acc, day) => acc + day, 0);
    return days;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL_LEAVE, formData);
      props.resetState();
      props.toggle();
      console.log("Data submitted successfully:");
    } catch (error) {
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
                onChange={(e) => {
                  handeDateChange(e.target.value, "start_date");
                }}
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
                onChange={(e) => {
                  handeDateChange(e.target.value, "end_date");
                }}
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="days">Days</Label>
              <Input
                type="text"
                name="days"
                id="days"
                value={formData.days}
                readOnly
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
