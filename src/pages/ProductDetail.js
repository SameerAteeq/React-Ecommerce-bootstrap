import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "react-lightbox-component/build/css/index.css";
import Lightbox from "react-lightbox-component";
import { useContext } from "react";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import NoImage from "../assets/images/noImage.png";
const ProductDetail = () => {
  const { theme } = useContext(ThemeContext);
  const { cardId } = useParams();
  const [product, setProduct] = useState([]);
  const { addItem } = useCart();
  useEffect(() => {
    const getResponse = async () => {
      const resp = await axios.get(`https://dummyjson.com/products/${cardId}`);
      setProduct(resp?.data);
    };
    getResponse();
  }, []);
  console.log(product, "single product");
  const discountPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);
  console.log(discountPrice, "dis");
  return (
    <Container className="py-5">
      {product?.length !== 0 ? (
        <Row className="justify-content-center mt-5">
          <Col xs={10} md={5} lg={5} className="p-0">
            <Lightbox
              images={[
                {
                  src: product?.images[0],
                  title: product?.title,
                  description: `images`,
                },
                {
                  src: product?.images[1] ? product?.images[1] : NoImage,
                  title: product?.images[1]
                    ? product?.title
                    : "Not Available🚫",
                  description: `images`,
                },
                {
                  src: product?.images[2] ? product?.images[2] : NoImage,
                  title: product?.images[2]
                    ? product?.title
                    : "Not Available🚫",
                  description: `images`,
                },
                {
                  src: product?.images[3] ? product?.images[3] : NoImage,
                  title: product?.images[3]
                    ? product?.title
                    : "Not Available🚫 ",
                  description: `images`,
                },
              ]}
            />
          </Col>
          <Col
            xs={10}
            md={7}
            lg={7}
            className={`${theme ? "text-light" : "text-black"} product-details`}
          >
            <h1>{product?.title}</h1>
            <Button
              onClick={() => addItem(product)}
              className={`${
                theme ? "bg-dark-primary text-black" : "bg-light-primary"
              } d-flex justify-content-center align-items-center gap-1 rounded-2 p-2`}
              style={{ borderRadius: "0", border: 0 }}
            >
              <BsCartPlus size="1.4rem" />
              Add to cart
            </Button>
            <br />
            <div
              className={`${
                theme ? "text-dark-primary" : "text-light-primary"
              } h4 mt-3 d-block`}
            >
              <span
                style={{
                  textDecoration: "line-through",
                  color: "red",
                  marginRight: "12px",
                }}
              >
                {product?.price} Rs
              </span>
              {Math.round(discountPrice)} Rs
            </div>
            <br />
            <b className="h5">{product?.rating} ⭐</b>
            <p
              className="mt-3 h5"
              style={{ opacity: "0.8", fontWeight: "400" }}
            >
              {product?.description}
            </p>
          </Col>
        </Row>
      ) : (
        <h5
          className={
            theme
              ? "text-light my-5 text-center"
              : "text-black my-5 text-center"
          }
        >
          Please wait...
        </h5>
      )}
    </Container>
  );
};

export default ProductDetail;
