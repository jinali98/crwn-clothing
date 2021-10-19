import React from "react";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItems }) => {
  const { imageUrl, name, price, id } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItems(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
