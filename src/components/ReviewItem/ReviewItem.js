import React from 'react';

const ReviewItem = (props) => {
    const{name,price,quantity}=props.product;
    return (
        <div>
           <h1>{name}</h1>
           <h3>price: {price}</h3>
           <h3>Quantity: {quantity}</h3>
           <button className="mainButton">Remove Item</button>
        </div>
    );
};

export default ReviewItem;