import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { useState } from "react";

function Signup() {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
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
        })
        .catch((err) => {
          // Catch and display errors
          console.log(err);
        });
    }
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
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
