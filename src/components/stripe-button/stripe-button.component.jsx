import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51Io6fKGWJKdMC2S6eohsol1jHK4wsIMKJJDyYESHJfn7YsT8GFruGQnZ3tWz0i1NYsi5zA3gPSAqpzVe9r6N79Qn009FNz8tHK";

  const onToken = token => {
    console.log(token);
    alert("Payment was successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="crwn clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={ `Your total is £${ price }` }
      amount={ priceForStripe }
      panelLabel="Pay Now"
      token={ onToken }
      stripeKey={ publishableKey } />
  );
};

export default StripeButton;
