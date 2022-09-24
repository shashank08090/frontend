import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [name, setname] = useState("");
  const [password, setpass] = useState("");
  const navigate = useNavigate();
  const login = () => {
    fetch("http://localhost:5000/login", {
      method: "post",

      // Adding body or contents to send
      body: JSON.stringify({
        name: name,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((data) => {
        // Do some stuff here
        console.log("data sent to backend successfully");
        console.log(data);
        return data.json();
      })
      .then((x) => {
        console.log(x);
        if (x.msg === "fail") {
          alert("login failed");
        } else {
          console.log(x.user.name);
          localStorage.setItem("developers", x.user.name);
          navigate("/");
        }
      })

      .catch((err) => {
        // Catch and display errors
        console.log(err);
      });
  };

  return (
    <Form className="login m-5 p-5">
    <h3>Login Page</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setname(e.target.value);
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
          placeholder="Password"
          onChange={(e) => {
            setpass(e.target.value);
            console.log(password);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I have read to terms and conditions"
        />
      </Form.Group>
      <Button variant="primary" onClick={() => login()}>
        Login
      </Button>
    </Form>
  );
}

export default Login;
