import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import Header from "../Header/Header";
import axios from "axios";
import { API_URL_LOGIN } from "../Api/api";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((preFormData) => ({
      ...preFormData,
      [id]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(API_URL_LOGIN, formData);
      console.log("res", res);
      const accessToken = res.data.access_token;
      // Store the access token in local storage or state as needed
      localStorage.setItem("accessToken", accessToken);
      console.log("accessToken", accessToken);
      console.log("User logged in successfully");
    } catch (error) {
      setError("Invalid credentials. Please try again."); // Provide more user-friendly error messages
      console.error("Error occurred while logging in", error);
      console.error("Error details:", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container fluid className="bg-gradient">
        <Row className="justify-content-center align-items-center mt-5">
          <Col md={5}>
            <Form onSubmit={handleLogin} method="post">
              {error && <Alert color="danger">{error}</Alert>}
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormGroup>

              <Button className="col-md-12" color="primary" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
