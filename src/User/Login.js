import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userlogin } from "../react_redux/Actions/actions";
const Login = (props) => {
  const [name, setname] = useState("");
  const [password, setpass] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    props.userInfo == null
      ? console.log(props.userInfo)
      : console.log(props.userInfo);
  });
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
        }
      })

      .catch((err) => {
        // Catch and display errors
        console.log(err);
      });
  };

  const login2 = () => {
    // props.login({ name: name, password: password });
    const payload = { name: name, password: password };

    props.login(payload);
    // props.login();
    login3();
  };
  const login3 = () => {
    setTimeout(() => {
      if (localStorage.getItem("developers")) {
        navigate("/");
      }
    }, 1000);
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
      <Button
        variant="primary"
        onClick={() => {
          login2();
        }}
      >
        Login
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userInfo: state.userInfo,
  };
};
const mapDispatchToProps = (dispatch, payload) => {
  console.log(payload);
  console.log(dispatch);
  return {
    login: (payload) => dispatch(userlogin(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
