import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ imageUrl, price, name, quantity }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='cart'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span>${`${quantity} x ${price * quantity}`}</span>
        </div>
    </div>
)

export default CartItem;