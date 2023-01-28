import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { addItem } = useCart();
  const addToCart = () => {
    addItem(data);
    toast.success("Item added to cart");
  };
  return (
    <Card
      style={{ width: "20rem", height: "auto", cursor: "pointer" }}
      className={`  ${
        theme ? "bg-light-black text-light" : "bg-lihgt text-black"
      } card text-center p-0 overflow-hidden  mx-auto mb-4`}
    >
      <div
        onClick={() => navigate(`/cart/${data?.id}`)}
        style={{
          background: "white",
          height: "15rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "inherit",
        }}
      >
        <div className="w-100 hover-zoom bg-image" style={{ width: "100%" }}>
          <Card.Img variant="top" src={data?.images[0]} className="img-fluid" />
        </div>
      </div>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            lineClamp: 2,
          }}
        >
          {data?.title}
        </Card.Title>
        <Card.Title>
          Rs. <span className="h3">{data?.price}</span>
        </Card.Title>
        <Button
          onClick={addToCart}
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary"
          } d-flex align-item-center m-auto border-0`}
        >
          <BsCartPlus size="1.8rem" />
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
