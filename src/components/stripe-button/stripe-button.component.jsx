import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jp4l5GosjtUMNbqHH9wfZtP78J08cNlly6rj1al93WxIBjyse2c7NjkmgRlgcur9APAc9GuxLS7QgM8CS5uBkrD00WPY1DNn8";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succeful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd"
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      allowRememberMe
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
