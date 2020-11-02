import React from 'react';
import { removeCartItem, removeItem, addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, deleteCartItem, deleteItem, addCartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={() => deleteItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={() => deleteCartItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteCartItem: item => dispatch(removeCartItem(item)),
    deleteItem: item => dispatch(removeItem(item)),
    addCartItem: item => dispatch(addItem(item)) 
});

export default connect(null, mapDispatchToProps)(CheckoutItem);