import React from "react";
import { useContext } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";

const Cart = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log(items, "i");
  return (
    <Container className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-light" : "text-light-primary"
        } my-5 text-center`}
      >
        {isEmpty ? "Your cart is Empty" : "Your Carts"}
      </h1>
      {isEmpty && (
        <Button
          onClick={() => navigate("/products")}
          style={{ border: 0 }}
          className={`text-center m-auto d-block ${
            theme ? "text-black bg-dark-primary" : "bg-light-primary"
          } `}
        >
          Buy Something
        </Button>
      )}
      <Row className="jutify-content-center">
        <Table
          responsive="sm"
          bordered
          hover
          variant={theme ? "dark" : "light"}
          className="mb-4"
        >
          <tbody>
            {items?.map((item, i) => (
              <tr>
                <td>
                  <div
                    onClick={() => navigate(`/cart/${item?.id}`)}
                    style={{
                      background: "white",
                      height: "8rem",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ padding: ".5rem" }}>
                      <img
                        src={item?.images[0]}
                        style={{ width: "5rem" }}
                        alt={item?.title}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <h6
                    style={{
                      whiteSpace: "nowrap",
                      width: "7rem",
                      overflow: "hidden",
                      textOverFlow: "ellipsis",
                    }}
                  >
                    {item?.title}
                  </h6>
                </td>
                <td>Rs.{item?.price}</td>
                <td> {item?.quantity}</td>
                <td
                  style={{
                    width: "220px",
                  }}
                >
                  <Button
                    className="ms-2"
                    onClick={() =>
                      updateItemQuantity(item?.id, item?.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Button
                    className="ms-2"
                    onClick={() =>
                      updateItemQuantity(item?.id, item?.quantity + 1)
                    }
                  >
                    +
                  </Button>
                  <Button
                    className="ms-2"
                    variant="danger"
                    onClick={() => {
                      removeItem(item?.id);
                      toast.success("Item deleted");
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {!isEmpty && (
          <Row
            fluid
            style={{
              width: "100%",
            }}
            className={`${
              theme ? "bg-light-black text-light" : "bg-light text-balck"
            } justify-content-center w-100`}
          >
            <Col className="py-2">
              <h4>Total Price: Rs. {cartTotal}</h4>
            </Col>
            <Col className="p-0" md={4}>
              <Button
                variant="danger"
                className="m-2"
                onClick={() => {
                  emptyCart();
                  toast.success("cart has cleared");
                }}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </Button>
              <Button variant="success" className="m-2">
                <BsCartCheck size="1.7rem" />
                Clear Cart
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
