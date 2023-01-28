import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const name = form.name.value;
    const password = form.password.value;
    if (name && password) {
      setLoading(true);
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => sessionStorage.setItem("token", json.token))
        .catch((error) => console.error(error))
        .finally(() => {
          setLoading(false);
          //   navigate("/", { replace: true });
          alert("Login successfully");
        });
    }
  };
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
            Login
          </h1>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3 mt-5">
              <InputGroup.Text id="inputGroup-sizing-default">
                <AiOutlineUser size="1.4rem" />
              </InputGroup.Text>
              <Form.Control
                name="name"
                type="text"
                placeholder="Username"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                <VscKey size="1.4rem" />
              </InputGroup.Text>
              <Form.Control
                name="password"
                type="password"
                style={{ outline: "none" }}
                placeholder="Password"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <Button
              type="submit"
              style={{ border: 0 }}
              className={`text-center m-auto d-block ${
                theme ? "text-black bg-dark-primary" : "bg-light-primary"
              } `}
            >
              Login
            </Button>
            <Row className="py-2 border-bottom mb-3" />
          </Form>
          <div className="d-flex align-items-center gap-2">
            <h6
              className={`d-flex align-items-center gap-2 ${
                theme ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              Don't have an account?
              <Link to="/register" onClick={() => navigate("/register")}>
                Register
              </Link>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
