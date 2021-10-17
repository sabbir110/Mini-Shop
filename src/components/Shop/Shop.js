import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";


const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = saveCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const other = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...other, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <Container fluid className="ShopContainer">
      <title>Mini Shop</title>
      <Row>
        <Col lg={9} md={8} sm={12} className="productContainer">
          {product.map((pd) => (
            <Product
              key={pd.key}
              product={pd}
              handleAddProduct={handleAddProduct}
            ></Product>
          ))}
        </Col>

        <Col lg={3} md={4}>
          <Cart cart={cart} keys={product.keys} hideCart="cartTop hideCart">
            <Link to="/review">
              <button className="mainButton">Review Order</button>
            </Link>
          </Cart>
        </Col>
      </Row>
      <div className="fixed-bottom text-end smallBtn m-3 ">
        <Link to="/review">
          <button className="smallBtnLink  ">
            Review <br /> Order
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Shop;
