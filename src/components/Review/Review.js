import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) => {
        const newCart=cart.filter(pd =>pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key];
            return product;
        })
        setCart(cartProduct)
    }, [])
    return (
        <div>
            <h1>Cart Item: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem
                    product={pd}
                    key={pd.key}
                    removeProduct={removeProduct}
                ></ReviewItem>)
            }
        </div>
    );
};

export default Review;