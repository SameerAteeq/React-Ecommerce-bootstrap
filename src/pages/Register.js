import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [number, setNumber] = useState(null);
  const { theme } = useContext(ThemeContext);
  return (
    <Container className="py-4">
      <Row className="justify-content-center my-5">
        <Col
          xs={11}
          md={7}
          lg={5}
          className={` p-4 rounded ${
            theme ? "text-light bg-dark" : "text-black bg-light"
          }`}
        >
          <h1
            className={`border-bottom pb-3 text-center ${
              theme ? "text-dark-primary" : "text-light-primary"
            }`}
          >
            Registeration
          </h1>
          <Form>
            <Row>
              <Form.Group className="col-lg-6">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" />
              </Form.Group>
              <Form.Group className="col-lg-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                minLength={3}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No</Form.Label>
              <PhoneInput
                country={"pk"}
                value={number}
                onChange={(phone) => setNumber(phone)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                minLength={6}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              style={{ border: 0 }}
              className={`text-center m-auto d-block ${
                theme ? "text-black bg-dark-primary" : "bg-light-primary"
              } `}
            >
              Sign Up
            </Button>
            <Row className="py-2 border-bottom mb-3" />
          </Form>
          <div className="d-flex align-items-center gap-2">
            <h6
              className={`d-flex align-items-center gap-2 ${
                theme ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              Already have an account?
              <Link to="/login">Login</Link>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
