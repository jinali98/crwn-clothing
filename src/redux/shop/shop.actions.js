import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { shopActionTypes } from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    //useonSnapShot() method on reference in order to get latest and updated data. whenever the reference data updated it will send the latest data

    collectionRef.onSnapshot(
      async (snapshot) => {
        //this is an object of shop data
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        // this.props.updateCollection(collectionsMap);
        // this.setState({ loading: false });
        console.log(collectionsMap);
      },
      (error) => dispatch(fetchCollectionsFailure(`this is the error ${error}`))
    );
  };
};
