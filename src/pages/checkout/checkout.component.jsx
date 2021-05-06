import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal }
  from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem
  from "../../components/checkout-item/checkout-item.component";
import StripeButton
  from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => {

  const nextYear = (new Date().getFullYear() + 1)
                   .toString()
                   .substr(-2);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(
          cartItem => <CheckoutItem key={ cartItem.id }
                                    cartItem={ cartItem } />
        )
      }
      <div className="total">
        <span>TOTAL: £{ total }</span>
      </div>
      <div className="test-warning">
        <span>
          ** Please use the following test credit card for payments **
        </span>
        <span>Card number:</span>
        <span>4242 4242 4242 4242</span>
        <span>MM / YY:</span>
        <span>01 / { nextYear }</span>
        <span>CVC:</span>
        <span>123</span>
      </div>
      <StripeButton price={ total } />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
