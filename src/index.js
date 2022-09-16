import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signup from "./User/Signup";
import Footer from "./Footer/Footer";
import Login from "./User/Login";
import Homepage from "./Homepage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <App />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  </>,
  document.getElementById("root")
);
