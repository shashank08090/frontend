import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();
  let gapi = window.gapi;
  const postapi = () => {
    console.log("postapi clicked");
    if (name === "" || pass === "") {
      var x = document.getElementById("email");
      var x2 = document.getElementById("password");
      console.log(x.value + " and the password is : " + x2.value);
    } else {
      console.log("username : " + name + " and password" + pass);
      fetch("http://localhost:5000/register", {
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          name: name,
          password: pass,
        }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((data) => {
          // Do some stuff here
          console.log("data sent to backend successfully");
          console.log(data);
          navigate("/login");
        })
        .catch((err) => {
          // Catch and display errors
          console.log(err);
        });
    }
  };

  const onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  };
  useEffect(() => {
    console.log("Hii");
    insertScript();
  }, []);
  const insertScript = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      initializeGoogleSigIn();
    };
    document.body.appendChild(script);
  };
  const initializeGoogleSigIn = () => {
    window.gapi.load("auth2", () => {
      let auth2 = gapi.auth2.init({
        client_id:
          "89418784231-hdaq5hus3njuuvv2c7ank3suh67ar9r5.apps.googleusercontent.com",
      });
      console.log("api inited");
    });
  };
  return (
    <Form className="signup m-5 p-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          width="50%"
          placeholder="Enter email"
          onBlur={(e) => {
            setname(e.target.value);
            console.log(name);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          placeholder="Password"
          onBlur={(e) => {
            setpass(e.target.value);
            console.log(pass);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree to  the terms and conditions"
        />
      </Form.Group>
      <Button variant="primary" onClick={() => postapi()}>
        Register
      </Button>{" "}
      <br />
      <div className="g-signin2" data-onsuccess="onSignIn">
        <Button
          variant="primary"
          onClick={() => onSignIn()}
          className="googlelogin"
        >
          {" "}
          Login with Google
        </Button>
      </div>
    </Form>
  );
}

export default Signup;
