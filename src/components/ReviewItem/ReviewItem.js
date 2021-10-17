import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const{name,price,quantity,key}=props.product;
    return (
        <div className="reviewTop">
           <h1>{name}</h1>
           <h3>price: {price}</h3>
           <h3>Quantity: {quantity}</h3>
           <button 
           onClick={()=>props.removeProduct(key)}
           className="mainButton">Remove Item</button>
        </div>
    );
};

export default ReviewItem;