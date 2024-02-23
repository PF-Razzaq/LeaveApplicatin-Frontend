import React, { useState, useEffect } from "react";
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

const AddEmployee = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    department: "",
    role: "",
    employeeId: "",
  });

  useEffect(() => {
    if (props.employee) {
      const {
        firstName,
        lastName,
        email,
        birthday,
        department,
        role,
        employeeId,
      } = props.employee;
      setFormData({
        firstName,
        lastName,
        email,
        birthday,
        department,
        role,
        employeeId,
      });
    }
  }, [props.employee]);

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
      <h1 className="text-center mt-5">Add Employee</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                value={defaultIfEmpty(formData.firstName)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                value={defaultIfEmpty(formData.lastName)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={defaultIfEmpty(formData.email)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="birthday">Birthday</Label>
              <Input
                type="date"
                name="birthday"
                id="birthday"
                value={defaultIfEmpty(formData.birthday)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="department">Department</Label>
              <Input
                type="text"
                name="department"
                id="department"
                value={defaultIfEmpty(formData.department)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="w-100">
            <FormGroup>
              <Label for="role">Role</Label>
              <Input
                type="select"
                name="role"
                id="role"
                value={defaultIfEmpty(formData.role)}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="Web Developer">Web Developer</option>
                <option value="Tester">Tester</option>
                <option value="Others">Others</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="employeeId">Employee ID</Label>
              <Input
                type="text"
                name="employeeId"
                id="employeeId"
                value={defaultIfEmpty(formData.employeeId)}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="w-100 bg-primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;
