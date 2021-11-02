import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import withSpinner from "../../hoc/with-spinner";
import {
  fetchCollectionsStartAsync,
  updateCollections,
} from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selector";
import CategoryPage from "../categoryPage/category-page.component";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CategoryPageWithSpinner = withSpinner(CategoryPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();

    // const collectionRef = firestore.collection("collections");
    // //useonSnapShot() method on reference in order to get latest and updated data. whenever the reference data updated it will send the latest data
    // collectionRef.onSnapshot(async (snapshot) => {
    //   //this is an object of shop data
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   this.props.updateCollection(collectionsMap);
    //   this.setState({ loading: false });
    //   console.log(collectionsMap);
    // });
    // console.log(collectionRef);
  }
  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   updateCollection: (items) => dispatch(updateCollections(items)),
// });

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
