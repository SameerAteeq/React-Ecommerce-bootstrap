import axios from "axios";
import React from "react";
import SearchFilter from "react-filter-search";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [searchInput, setSearchInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [filterProducts, setFilterProducts] = useState(productsData);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const getProducts = async () => {
      const resp = await axios.get("https://dummyjson.com/products");
      console.log(resp?.data?.products, "resp");
      setProductsData(resp?.data?.products);
      setFilterProducts(resp?.data?.products);
    };
    getProducts();
  }, []);
  console.log(productsData, "p");
  const filterItems = (cat) => {
    const filterArray = productsData?.filter((item) => item.category === cat);
    setFilterProducts(filterArray);
  };
  console.log(filterProducts, "fil");
  return (
    <Container style={{ paddingBottom: "50px" }} className="pb-12 ">
      <Row className="justify-content-center">
        <Col
          xs={12}
          md={12}
          lg={12}
          xl={12}
          className="text-center overflow-auto"
        >
          <h1 className={theme ? "text-light my-4" : "text-black my-4"}>
            Products
          </h1>
          <div className="w-100 d-flex justify-content-center align-items-center gap-1 my-5 p-0">
            <Button
              style={{ border: 0 }}
              className={`text-center d-block ${
                theme ? "text-black bg-dark-primary" : "bg-light-primary"
              } `}
              onClick={() => setFilterProducts(productsData)}
            >
              All
            </Button>
            <Button
              style={{ border: 0 }}
              className={`text-center  ${
                theme ? "text-black bg-dark-primary" : "bg-light-primary"
              } `}
              onClick={() => filterItems("smartphones")}
            >
              Smart Phones
            </Button>
            <Button
              style={{ border: 0 }}
              className={`text-center  ${
                theme ? "text-black bg-dark-primary" : "bg-light-primary"
              } `}
              onClick={() => filterItems("groceries")}
            >
              Groceries
            </Button>
            <Button
              style={{ border: 0 }}
              className={`text-center  ${
                theme ? "text-black bg-dark-primary" : "bg-light-primary"
              } `}
              onClick={() => filterItems("home-decoration")}
            >
              Home Decoration
            </Button>
          </div>
          {/* <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }
            >
              <BiSearch />
            </InputGroup.Text>
            <Form.Control
              value={searchInput}
              placeholder="Search Products"
              onChange={(e) => setSearchInput(e.target.value)}
              className={
                theme ? "bg-light-black text-light" : "bg-light text-black"
              }
            />
          </InputGroup> */}
        </Col>
        {filterProducts?.length > 0 ? (
          <Row className="justify-content-center">
            {filterProducts
              ?.slice(0, visible ? filterProducts?.length : 6)
              ?.map((item, i) => (
                <ProductCard data={item} key={i} />
              ))}
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
      </Row>
      {filterProducts?.length > 6 && (
        <Button
          style={{ border: 0 }}
          className={`text-center d-block m-auto ${
            theme ? "text-black bg-dark-primary" : "bg-light-primary"
          } `}
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Show less" : "Load More..."}
        </Button>
      )}
    </Container>
  );
};

export default AllProducts;
