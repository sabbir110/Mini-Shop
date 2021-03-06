import React from 'react';
import { Container } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price*product.quantity;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.5
    }
    else if (total > 0) {
        shipping = 12.5
    }
    const tax = (total / 10).toFixed(2)
    const grandTotal = Math.round(total + shipping + Number(tax))
    return (
        <Container className={props.hideCart}>
            <h4>Order Summary</h4>
            <p> <strong>Items Order: </strong> {cart.length}</p>
            <p> <strong>Shipping Const :</strong> {shipping}$</p>
            <p> <strong>Product price :</strong> {(total).toFixed(2)}$</p>
            <p> <strong>Tax and Vat :</strong> {tax}$</p>
            <p> <strong>Total price :</strong> {grandTotal}$</p>
            {props.children}
        </Container>
    );
};

export default Cart;