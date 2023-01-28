import React from "react";
import { useContext } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import {
  BsFacebook,
  BsTwitter,
  BsStackOverflow,
  BsYoutube,
} from "react-icons/bs";
import Apple from "../assets/images/apple.png";
import Google from "../assets/images/google.png";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      style={{
        position: "relative",
        bottom: 0,
      }}
      className={
        theme ? "bg-dark-primary text-black  w-100" : "home-bg text-white"
      }
    >
      <Container fluid className="h-25 p-4">
        <Row className="w-100">
          <Col xs={12} md={6} lg={4}>
            <h4>Follow Us</h4>
            <p>
              Get in touch and don't forget to follow us on all social networks
            </p>
            <ul className="p-0">
              <li className="list-unstyled d-inline-block  link-light me-2  ">
                <BsFacebook size="1.2rem" className="fb icons" />
              </li>
              <li className="list-unstyled d-inline-block  link-light me-2  ">
                <BsStackOverflow size="1.2rem" className="icons stack" />
              </li>
              <li className="list-unstyled d-inline-block link-light me-2  ">
                <BsTwitter size="1.2rem" className="icons twitter" />
              </li>
              <li className="  list-unstyled d-inline-block link-light me-2  ">
                <BsYoutube size="1.2rem" className=" yt icons " />
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h4>Sign Up to Newslater</h4>
            <p>
              Join 60.000+ subscribers and get a new discount coupon on every
              Friday.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Your email address..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h4>Download App</h4>
            <p>
              Our ecommerce App is now available on App Store & Google Play. Get
              it now.
            </p>
            <div className="d-flex align-items-center gap-2 ">
              <img
                src={Apple}
                style={{ width: "110px", borderRadius: "4px" }}
                // className="h-100 w-100"
              />
              <img
                src={Google}
                style={{ width: "110px", borderRadius: "4px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
