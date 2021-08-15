import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetails = () => {
    const {productKey}=useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product)
    const {img, name, seller, stock, price,key}=product;
    return (
        <Container >
            <Row>
            
                <Col lg={6} md={6} sm={12}>
                <Image className="w-100" src={img} alt="Product Image"  thumbnail rounded />
                </Col>
           
                <Col lg={6} md={6} sm={12}>
                <h1>{name}</h1>
                <h4>Seller: {seller}</h4>
                <h4>Stock: {stock}</h4>
                <h4>Price: {price}$</h4>
                <p>Product Key: {key}</p>
                </Col>
                </Row>
        </Container>
    );
};

export default ProductDetails;