import { takeEvery, put, all, takeLatest, call } from "redux-saga/effects";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN,
} from "../Constants/userConstants";
import { useNavigate } from "react-router-dom";

function* mastersaga() {
  //   console.warn("call api here");
  yield takeEvery(USER_LOGIN, userlogin);
}

function* userlogin(action, payload) {
  // const temp = yield call()
  var temp = 0;
  var currentuser;
  yield put({ type: "USER_LOGIN_REQUEST" });
  var flag = false;

  fetch("http://localhost:5000/login", {
    method: "post",

    // Adding body or contents to send

    body: JSON.stringify({
      //    action.payload,
      name: action.payload.name,
      password: action.payload.password,
    }),
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((data) => {
      // Do some stuff here
      //   console.log("data sent to backend successfully");
      //   console.log(data.json());
      return data.json();
    })
    .then((x) => {
      console.log(x);
      if (x.msg === "fail") {
        //
        temp = 1;
        alert("login failed");
      } else {
        // console.log(x.user.name);
        //
        localStorage.setItem("developers", x.user.name);
        currentuser = x.user.name;
        // navigate("/");
        // useNavigate("/");
      }
    })

    .catch((err) => {
      // Catch and display errors
      console.log(err);
    });
  if (temp == 1) {
    yield put({ type: "USER_LOGIN_FAIL" });
  } else {
    yield put({
      type: "USER_LOGIN_SUCCESS",
      payload: localStorage.getItem("developers"),
    });
  }
}
export default mastersaga;
