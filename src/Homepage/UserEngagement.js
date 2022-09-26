import React from "react";
import "./UserEngagement.css";
import { useState } from "react";

const UserEngagement = () => {
  const [question, setQuestion] = useState("");
  const [ques, showques] = useState("");

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
    //   navigate('/')
    showques(question);
  };

  return (
    <div>
      {/* <h1>Hiiii User</h1> */}
      <div className="all">
        <input
          className="input"
          type={"textbox"}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
            showques("");
          }}
          placeholder="What do you want ?"
        ></input>
        <br></br>
        <button onClick={postData} className="btn">
          Ask
        </button>
        <button className="btn">Answer</button>
        <button className="btn">Post</button>
      </div>
      <div>
        <h4>{ques}</h4>
      </div>
    </div>
  );
};

export default UserEngagement;
