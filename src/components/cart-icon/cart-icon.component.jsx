import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
    console.log('rendering cart icon...');
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => {
    // console.log('running map state to props....');
    // return {
    //     itemsCount: state.cart.cartItems.reduce((totalCount, item) => totalCount + item.quantity, 0)
    // }
    return {
        itemsCount: selectCartItemsCount(state)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);