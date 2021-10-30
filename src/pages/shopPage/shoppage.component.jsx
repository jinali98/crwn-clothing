import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CategoryPage from "../categoryPage/category-page.component";

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    //useonSnapShot() method on reference in order to get latest and updated data. whenever the reference data updated it will send the latest data

    collectionRef.onSnapshot(async (snapshot) => {
      //this is an object of shop data
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollection(collectionsMap);
      console.log(collectionsMap);
    });

    console.log(collectionRef);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (items) => dispatch(updateCollections(items)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
