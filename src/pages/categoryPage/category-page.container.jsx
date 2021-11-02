import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../hoc/with-spinner";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import CategoryPage from "./category-page.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CategoryPage);

export default CategoryPageContainer;
