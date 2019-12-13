//Library imports
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ( { price } ) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Eg94uX21TVPa6J3ssphHaIqr000bEv5Teb";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="EUR"
    />
  );
}

export default StripeCheckoutButton;