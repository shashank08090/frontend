import React from "react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./homepage.css";
import UserEngagement from "./UserEngagement";
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
    <div className="homepage">
      <UserEngagement />
      {qna ? (
        <h1>
          {qna.map((result, index) => {
            // console.log(result.question);
            if (index > page * 4 - 4 && index <= page * 4)
              return <p className="card">{result.question}</p>;
          })}
        </h1>
      ) : (
        <h1>still loading.... please wait</h1>
      )}
      <Pagination datafromPagination={datafromPagination} />
    </div>
  );
};

export default Homepage;
