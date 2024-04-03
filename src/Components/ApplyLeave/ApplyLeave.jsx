import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_URL_LEAVE } from "../Api/api";
import { Flip, Slide, toast } from "react-toastify";
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
import { useNavigate } from "react-router-dom";

const ApplyLeave = (props) => {
  const [formData, setFormData] = useState({
    id: 0,
    employee: "",
    start_date: "",
    end_date: "",
    leave_entries: "",
    days: "",
    leave_type: "",
    reason: "",
  });

  useEffect(() => {
    if (props.apply_leave) {
      const {
        id,
        employee,
        start_date,
        end_date,
        leave_entries,
        days,
        leave_type,
        reason,
      } = props.apply_leave;
      setFormData({
        id,
        employee,
        start_date,
        end_date,
        leave_entries,
        days,
        leave_type,
        reason,
      });
    }
  }, [props.apply_leave]);
  const storedUser = localStorage.getItem("loggedInUser");
  const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handeDateChange = (date, fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: date,
      days: calculateDays(prevFormData.start_date, date),
    }));
  };

  const memoizedFormData = useMemo(() => formData, [formData]);

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
    ).reduce((acc, day) => Number(acc) + Number(day), 0);
    const daysNumber = Number(days);
    return daysNumber;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   let days = formData.days;

      //   if (formData.leave_entries === "Full Leave") {
      //     days = calculateDays(formData.start_date, formData.end_date);
      //     const calculateDays = (startDate, endDate) => {
      //       const days = Array.from(
      //         {
      //           length:
      //             (new Date(endDate) - new Date(startDate)) /
      //               (1000 * 60 * 60 * 24) +
      //             1,
      //         },
      //         (_, index) => {
      //           const currentDate = new Date(startDate);
      //           currentDate.setDate(currentDate.getDate() + index);
      //           return currentDate.getDay() !== 6 && currentDate.getDay() !== 0
      //             ? 1
      //             : 0;
      //         }
      //       ).reduce((acc, day) => acc + day, 0);
      //       return days;
      //     };
      //   } else if (formData.leave_entries === "Half Leave") {
      //     days = 0.5;
      //   }

      // setFormData((prevFormData) => ({ ...prevFormData, days: days }));
      await axios.post(API_URL_LEAVE, formData);
      toast.success(`Successfully Added Leave`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
      props.resetState();
      props.toggle();
      window.location.reload();
    } catch (error) {
      props.resetState();
      console.error("Error submitting data:", error);
    }
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };
  const leaveOptions = ["Sick", "Casual", "Annual"];
  const leaveentries = ["Full Leave", "Half Leave"];
  return (
    <Container>
      <Form onSubmit={handleSubmit} method="post">
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="employee">Employee Id</Label>
              <Input
                type="text"
                name="employee"
                maxLength={3}
                id="employee"
                placeholder="Please Enter Your ID"
                value={defaultIfEmpty(memoizedFormData.employee)}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9-]/g, "");
                }}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="start_date">Start Date</Label>
              <Input
                type="date"
                name="start_date"
                placeholder="Please Enter Leave Start Date"
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
                placeholder="Please Enter Leave End Date"
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
              <Label for="leave_entries">Leave Entries</Label>
              <Input
                type="select"
                name="leave_entries"
                id="leave_entries"
                value={defaultIfEmpty(formData.leave_entries)}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Leave Entries
                </option>
                {leaveentries.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="days">Days</Label>
              <Input
                type="text"
                name="days"
                id="days"
                value={parseInt(formData.days)}
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
        <Button className="w-100 bg-primary" type="submit">
          Request Leave
        </Button>
      </Form>
    </Container>
  );
};

export default ApplyLeave;
