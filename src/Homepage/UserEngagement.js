import React from "react";
import "./UserEngagement.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const UserEngagement = () => {
  const [question, setQuestion] = useState("");
  const [ques, showques] = useState("");

  const navigate = useNavigate();

  const postData = async () => {
    console.log(question);
    let result = await fetch("http://localhost:5000/question", {
      method: "post",
      body: JSON.stringify({
        question,
        name: localStorage.getItem("developers"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    showques(question);
  };
  const postPhoto = (e) => {
    console.log("post  clk");
  };
  const answer = () => {
    console.log("answer clk");
    navigate("/question");
  };
  const imageUpload = async (e) => {
    console.log("imag pload");
    console.log(e.target.files[0]);
    const files = e.target.files;
    const formData = new FormData();
    const payload = { name: question, testImage: formData };
    formData.append("testImage", files[0]);
    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: payload,
      // headers :{
      //   "Content-Type": "multipart/form-data",
      // },
    });
    // image1 = await image1.json();
  };
  return (
    <div>
      {/* <h1>Hiiii User</h1> */}
      <Container className="all" fluid>
        <Row>
          <Col>
            {" "}
            <input
              className="input"
              type="textbox"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                showques("");
              }}
              placeholder="What do you want ?"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <button onClick={postData} className="btn">
              Ask
            </button>
          </Col>
          <Col>
            <button onClick={answer} className="btn">
              Answer
            </button>
          </Col>
          <Col>
            <button className="btn">Post</button>
          </Col>
        </Row>
      </Container>
      <div className="photo">
        <input type={"file"} name={"testImage"} onChange={imageUpload} />
        <button onClick={postPhoto}>Upload Photo</button>
      </div>
    </div>
  );
};

export default UserEngagement;
