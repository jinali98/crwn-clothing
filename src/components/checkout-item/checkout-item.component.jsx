import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItems,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({
  cartItem,
  clearitem,
  increseItemCount,
  decreaseItemCount,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemCount(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increseItemCount(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearitem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearitem: (item) => dispatch(clearItemFromCart(item)),
  increseItemCount: (item) => dispatch(addItems(item)),
  decreaseItemCount: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
