import React from 'react';
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer className="cart-item">
        <CartItemImage src={imageUrl} alt="item" />
        <ItemDetailsContainer className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x £{price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;