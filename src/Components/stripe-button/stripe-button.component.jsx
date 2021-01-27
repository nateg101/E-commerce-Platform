import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IEGG0HBnbOLgQrjU3PoVEwLXXfKGxRmOX5oIuAR6VNWEiHZMU2KjM8NgVwMjCQWjz1v06D6FnV4kRVuS4bLfWXH00Z84Y1zQn'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            currency="GBP"
            label="Pay Now"
            name="Nat's Clothing Ltd."
            billingAddress
            shippingAddress
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;