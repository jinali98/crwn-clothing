import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../components/sign-up/sign-up.component";
import "./signin-signup.styles.scss";

const SigninSignup = () => {
  return (
    <div className="signin-signup">
      <SignIn />
      <Signup />
    </div>
  );
};

export default SigninSignup;
