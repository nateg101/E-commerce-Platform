import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../Redux/cart/cart.actions';
import { 
    CheckoutItemContainer, 
    ImageContainer, 
    TextContainer, 
    QuantityContainer, 
    RemoveButtonContainer 
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (
    <CheckoutItemContainer className="checkout-item">
        <ImageContainer className="image-container">
            <img src={cartItem.imageUrl} alt="item"/>
        </ImageContainer>
        <TextContainer className="name">{cartItem.name}</TextContainer>
        <QuantityContainer className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)} >&#10094;</div>
            <span className="value">{cartItem.quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
        </QuantityContainer>
        <TextContainer className="price">£{cartItem.price}</TextContainer>
        <RemoveButtonContainer className="remove-button" onClick={() => clearItem(cartItem)}>
            &#10005;
        </RemoveButtonContainer>
    </CheckoutItemContainer>
)

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);