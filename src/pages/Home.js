import React from "react";
import {
  Button,
  Col,
  Container,
  Overlay,
  OverlayTrigger,
  Row,
} from "react-bootstrap";
import AllProducts from "./AllProducts";
import buds from "../assets/images/buds2.webp";
import ecomm from "../assets/images/ecomm.png";
import { useContext } from "react";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();
const items = [
  <div onDragStart={handleDragStart} role="presentation" data-value="1">
    <Container fluid className={` py-5 h-100vh`}>
      <Row className="justify-content-center align-items-center ">
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <span className="bg-span p-1 my-2">Hot Deal</span>
          <h2 className="mt-2">Sale 20% of Samsung galaxy buds </h2>
          <h5>Top quality earbuds & Accessories</h5>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <div style={{ height: "324px", width: "100%", alignItems: "center" }}>
            <img
              style={{
                backgroundPosition: "fit",
                backgroundRepeat: "no-repeat",
                width: "100%",
              }}
              className="h-75 text-center bg-"
              src={buds}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>,
  <div onDragStart={handleDragStart} role="presentation" data-value="2">
    <Container fluid className={` py-5 px-3`}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <span className="bg-span p-1 my-2">Hot Deal</span>
          <h2 className="mt-2">Sale 10% of Samsung galaxy buds </h2>
          <h5>Top quality earbuds & Accessories</h5>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="text-center">
          <div style={{ height: "324px", width: "100%" }}>
            <img className="h-75 w-100 text-center" src={buds} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>,
];

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={theme ? "bg-dark-primary text-black" : "home-bg text-white"}
      >
        <AliceCarousel
          infinite
          autoHeight
          fadeOutAnimation
          // autoPlay
          autoPlayInterval={5000}
          disableButtonsControls
          mouseTracking
          items={items}
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 1,
            },
          }}
        />
      </div>
      <AllProducts />
    </>
  );
};

export default Home;
