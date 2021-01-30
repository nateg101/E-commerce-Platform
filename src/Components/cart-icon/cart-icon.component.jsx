import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/cart/cart.selectors';
import { CartContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer className='item-count'>{itemCount}</ItemCountContainer>
    </CartContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);