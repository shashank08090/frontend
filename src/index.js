import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signup from "./User/Signup";
import Footer from "./Footer/Footer";
import Login from "./User/Login";
import Homepage from "./Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./User/Profile";
import PrivateCom from "./PrivateCom";
import Demo from "./User/Demo";
import Question from "./Homepage/Question";
import Checkout from "./Payment/Checkout";
import store from "./react_redux/Store/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <Routes>
        <Route path="/question" element={<Question />} />
        <Route path="/payment" element={<Checkout />} />

        <Route element={<PrivateCom />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/demo" element={<Demo />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
