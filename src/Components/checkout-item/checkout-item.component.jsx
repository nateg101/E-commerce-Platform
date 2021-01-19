import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../Redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt="item"/>
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">£{cartItem.price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>
            &#10005;
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);