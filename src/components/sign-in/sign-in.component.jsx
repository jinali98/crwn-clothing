import { Component, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import {
  googleSigninStarted,
  emailSigninStarted,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSigninStart, googleSignInSatrt }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSigninStart(email, password);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (err) {
    //   console.log(err.message);
    // }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target);
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInSatrt}
            isGoogleSignIn
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInSatrt: () => dispatch(googleSigninStarted()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStarted({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
