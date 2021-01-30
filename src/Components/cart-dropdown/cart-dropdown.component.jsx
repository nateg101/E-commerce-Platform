import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../Redux/cart/cart.selectors'
import { toggleCartHidden } from '../../Redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer } from './cart-dropdown.styles';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer className='cart-dropdown'>
        <CartItemsContainer className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : 
                <EmptyMessageContainer className="empty-message">Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));