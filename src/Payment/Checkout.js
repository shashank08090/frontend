import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./checkout.css";
const Checkout = () => {
  const [product, setProduct] = useState({
    name: "Please fix my bug",
    price: 100,
    productBy: "Kill My Bug private limited",
  });
  const makepayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch("http://localhost:5000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="checkout_page">
      <StripeCheckout
        stripeKey="pk_test_51LpFxNSIb0nmN1aGuj4fJOSSULyXZgAbX2TMdPgmoBMtkfltlUImPZLDN5duJBxTjkrcnWnv36nizGzgTvbhIYkC00TIn6n8WM"
        token={makepayment}
        name="Kill My bug"
        amount={product.price}
      >
        <button className="pay_button">
          Buy bug fixing services from this user : {product.price} Rs
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
