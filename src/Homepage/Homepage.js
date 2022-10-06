import React from "react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./homepage.css";
import UserEngagement from "./UserEngagement";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHeart, FaHeartBroken, FaBeer } from "react-icons/fa";
const Homepage = (props) => {
  const [qna, setqna] = useState("");
  const [page, setpage] = useState(1);
  useEffect(() => {
    console.log(props);
    fetch("http://localhost:5000/homepage", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // setqna(data);
        setTimeout(() => {
          setqna(data);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, []);
  const datafromPagination = (k) => {
    console.log(k);
    // setpage(Math.ceil(k / 4));
    setpage(k);
  };
  return (
    <Container className="homepage">
      <UserEngagement />
      {qna ? (
        <Row className="card">
          {qna.map((result, index) => {
            // console.log(result.question);
            if (index > page * 4 - 4 && index <= page * 4)
              return (
                <Col className="question_card">
                  <span className="profile_details">
                    <div className="profile_pic"></div>
                    {localStorage.getItem("developers")} <br />
                  </span>
                  {result.question}
                  <div className="question_engagement">
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
              );
          })}
        </Row>
      ) : (
        <h1>still loading.... please wait</h1>
      )}
      <Pagination datafromPagination={datafromPagination} />
    </Container>
  );
};

export default Homepage;
