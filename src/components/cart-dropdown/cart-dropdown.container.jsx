import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  hidden: () => dispatch(toggleCartHidden()),
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown);

export default CartDropdownContainer;
