import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [product, setProduct] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }
    return (
        <Container fluid className="ShopContainer">
            <Row >
                <Col lg={9} md={8} sm={12} className="productContainer">
                    {product.map(pd => <Product
                        key={pd.key}
                        product={pd}
                        handleAddProduct={handleAddProduct}
                    ></Product>)}
                </Col>

                <Col lg={3} md={4}  >
                    <Cart cart={cart}></Cart>

                </Col>
            </Row>
            <div className="fixed-bottom text-end smallBtn m-3 ">
                <Link to="/review"><button className="mainButton  h6 rounded-circle  p-2 ">Review <br /> Order</button></Link>
            </div>
        </Container>
    );
};

export default Shop;