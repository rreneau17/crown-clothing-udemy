import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? cartItems.map(item => {
                    return (
                        <CartItem key={item.id} {...item}/>
                    )
                }) : <span className='empty-message'>Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                Go To Checkout
            </CustomButton>
        </div>
    )
}
const mapStateToProps = state => {
    // return { cartItems: selectCartItems(state) }
    return { cartItems: state.cart.cartItems }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));