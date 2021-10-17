import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlace,setOrderPlace]=useState(false)

  const handlePlaceOrder=()=>{
    setCart([]);
    setOrderPlace(true);
    processOrder();
  }

  let thankYou;
  if(orderPlace){
    thankYou=<h1 className="text-center text-success">Thank You, Your Order Submitted...</h1>
  }
  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <Container fluid className="ShopContainer">
      <title>Review</title>
      <Row>
        <Col lg={9} md={8} sm={12} className="productContainer">
          {cart.map((pd) => (
            <ReviewItem
              product={pd}
              key={pd.key}
              removeProduct={removeProduct}
            ></ReviewItem>
          ))}
          {thankYou}
        </Col>

        <Col lg={3} md={4}>
            <Cart cart={cart} hideCart="cartTop mt-5 w-100">
              <button onClick={handlePlaceOrder} className="mainButton">Place Order</button>
            </Cart>

        </Col>
      </Row>
      <div className="fixed-bottom text-end smallBtn m-3 ">
    
          <button onClick={handlePlaceOrder} className="smallBtnLink  ">
          Place  <br /> Order
          </button>
      </div>
    </Container>
  );
};

export default Review;
