import React from "react";
import { CheckoutPageContainer,
         CheckoutHeader,
         HeaderBlock,
         Total,
         TestWarning } from "./checkout.style";
import CheckoutItem
  from "../../components/checkout-item/checkout-item.component";
import StripeButton
  from "../../components/stripe-button/stripe-button.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal }
  from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock><span>Product</span></HeaderBlock>
      <HeaderBlock><span>Description</span></HeaderBlock>
      <HeaderBlock><span>Quantity</span></HeaderBlock>
      <HeaderBlock><span>Price</span></HeaderBlock>
      <HeaderBlock><span>Remove</span></HeaderBlock>
    </CheckoutHeader>
    {
      cartItems.map(
        cartItem => <CheckoutItem
                      key={ cartItem.id }
                      cartItem={ cartItem } />
      )
    }
    <Total><span>TOTAL: £{ total }</span></Total>
    <TestWarning>
      <span>
        ** Please use the following test credit card for payments **
      </span>
      <span>Card number:</span>
      <span>4242 4242 4242 4242</span>
      <span>MM / YY:</span>
      <span>01 / {
        (new Date().getFullYear() + 1).toString().substr(-2)
      }</span>
      <span>CVC:</span>
      <span>123</span>
    </TestWarning>
    <StripeButton price={ total } />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
