import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import CollectionOverview from "./collection-overview.component";
import withSpinner from "../../hoc/with-spinner";

import { selectIsFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
