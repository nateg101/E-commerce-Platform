import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart.selectors';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component'
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer,  WarningContainer } from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer className="checkout-page">
        <CheckoutHeaderContainer className="checkout-header">
            <HeaderBlockContainer className="header-block">
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer className="header-block">
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <TotalContainer className="total">
            <span> Total: £{total}</span>
        </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments* 
            <br/>
            4242 4242 4242 4242 - Exp: 01/32 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);