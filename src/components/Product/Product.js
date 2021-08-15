import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, stock, price,key} = props.product;

    return (
        <Container className="product " >
            <Row>
                <Col lg={6} md={12} sm={12} className='d-flex align-items-center justify-content-center'>
                    <Image className="productImg" src={img} alt="" thumbnail fluid />
                </Col>
                <Col lg={6} md={12} sm={12} className="productName ">
                    <h4 className="mt-2"><Link to={"/product/"+key}>{name}</Link></h4>
                    <br />
                    <p>By: <small>{seller}</small></p>
                    <p>Price: {price}$</p>
                    <p><small>Only {stock} left in stock . Order son....</small></p>
                    <button
                        onClick={() => props.handleAddProduct(props.product)}
                        className="mainButton"
                    ><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;