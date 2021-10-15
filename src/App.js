import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shoppage.component";
import SigninSignup from "./pages/signinSignupPage/signin-signup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninSignup} />
      </Switch>
    </div>
  );
}

export default App;
