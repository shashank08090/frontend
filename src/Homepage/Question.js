import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Pagination from "./Pagination";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaHeart, FaHeartBroken, FaBeer } from "react-icons/fa";

import "./homepage.css";

export default function Question(props) {
  const [qna, setqna] = useState([]);
  const [art, setarticle] = useState();
  const [page, setpage] = useState(1);
  const [showthread, setshowthread] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/answer", {
      method: "GET",
    }).then((result) => {
      result.json().then((resp) => {
        setqna(resp);
      });
    });
  }, []);
  // console.log(qna);
  const datafromPagination = (k) => {
    // console.log(k);
    // setpage(Math.ceil(k / 4));
    setpage(k);
  };
  const gotoHome = () => {
    navigate("/");
  };
  const style = {
    backgroundColor: "#05C3DD",
    poition: "absolute",
    top: "0",
    right: "0",
    float: "right",
  };
  return (
    <div className="homepage">
      {showthread && (
        <Container fluid className="answers_container">
          <Row>
            <Col>Question : {art.question}</Col>
          </Row>
          <p>Answers</p>
          {art.answer.map((elem) => {
            return (
              <Row>
                <span className="profile_details">
                  <div className="profile_pic"></div>
                  {localStorage.getItem("developers")}
                </span>
                <Col className="card_answer">
                  {elem}
                  <div className="answerEngagement">
                    <span>
                      {" "}
                      <FaHeart /> Likes
                    </span>
                    <span>
                      {" "}
                      <FaHeartBroken />
                      Dislikes
                    </span>
                    <span>
                      {" "}
                      <FaBeer />
                      Comment
                    </span>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      )}
      {qna ? (
        <Container fluid>
          {qna.map((result, index) => {
            // console.log(result);
            if (index >= page * 4 - 4 && index <= page * 4)
              return (
                !showthread && (
                  <Row className="showquestion">
                    <Row>
                      <div className="authordetails">
                        <span className="profilepic"></span>
                        <span>{localStorage.getItem("developers")}</span>
                      </div>
                    </Row>
                    <Col
                      className="card"
                      onClick={() => {
                        setshowthread(true);
                        setarticle(result);
                      }}
                    >
                      {result.question}
                      <button className="openQuestion">open thread</button>
                    </Col>
                    <div className="QuestionEngagement">
                      <span>
                        {" "}
                        <FaHeart /> Likes
                      </span>
                      <span>
                        {" "}
                        <FaHeartBroken />
                        Dislikes
                      </span>
                      <span>
                        {" "}
                        <FaBeer />
                        Discuss
                      </span>
                    </div>
                  </Row>
                )
              );
          })}
        </Container>
      ) : (
        <h1>still loading.... please wait</h1>
      )}
      <Pagination datafromPagination={datafromPagination} />

      <button style={style} onClick={gotoHome}>
        Ask Questions
      </button>
    </div>
  );
}