import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51Io6fKGWJKdMC2S6eohsol1jHK4wsIMKJJDyYESHJfn7YsT8GFruGQnZ3tWz0i1NYsi5zA3gPSAqpzVe9r6N79Qn009FNz8tHK";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment was successful.");
    }).catch(error => {
      console.error(`Payment error: ${ JSON.parse(error) }`);
      alert("There was an issue with your payment. Please make sure to use the provided credit card.");
    });
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
