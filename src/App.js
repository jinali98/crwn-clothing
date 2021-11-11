import React from "react";
import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shoppage.component";
import SigninSignup from "./pages/signinSignupPage/signin-signup.component";
import CheckoutPage from "./pages/checkoutPage/checkout.component";

import Header from "./components/header/header.component";
import "./App.css";
import {
  addCollectionAndDocuments,
  addDocuments,
  auth,
  createUserProfileDocument,
  updateDocuments,
} from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
import {
  selectCollectionForPerview,
  selectCollections,
} from "./redux/shop/shop.selector";
import { checkUserSession } from "./redux/user/user.actions";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     todos: [
  //       {
  //         name: "todotype1",
  //         todoItem: "hello",
  //       },
  //       {
  //         name: "todotype2",
  //         todoItem: "hello",
  //       },
  //       {
  //         name: "todotype3",
  //         todoItem: "hello",
  //       },
  //     ],
  //   };
  // }

  // unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray, checkUserSession } = this.props;

    checkUserSession();
    // console.log(collectionsArray);
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    // to create a new todo array and set the received todo array to the state
    // const todoRef = await addDocuments(userAuth.uid);
    // todoRef.onSnapshot((snapshot) => {
    //   this.setState({
    //     todos: {
    //       ...snapshot.data(),
    //     },
    //   });
    // });

    // const todoGetRef = await updateDocuments(
    //   userAuth.uid,
    //   this.state.todos
    // );
    // todoGetRef.onSnapshot((snapshot) => {
    //   this.setState({
    //     todos: {
    //       ...snapshot.data(),
    //     },
    //   });
    // });
    // } else {
    //   setCurrentUser(userAuth);
    // addCollectionAndDocuments(
    //   "collections",
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
    // }
    // });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPerview,
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
