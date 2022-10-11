import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();
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
  return (
    <Form className="signup m-5 p-5">
      <h3>Register Yourself</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          width="50%"
          placeholder="Enter email"
          onChange={(e) => {
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
          onChange={(e) => {
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
      </Button>
    </Form>
  );
}

export default Signup;
