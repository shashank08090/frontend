import React from "react";
import "./UserEngagement.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const postPhoto = (e)=>{
    console.log("post  clk");
  }
  const answer = () =>{
    console.log("answer clk");
    navigate("/question")
  }
const imageUpload = async(e)=>{
  console.log("imag pload");
  console.log(e.target.files[0]);
  const files = e.target.files
  const formData = new FormData()
  const payload={"name":question,
          "testImage":formData
}
  formData.append('testImage', files[0])
  await fetch("http://localhost:5000/upload", {
    method: 'POST',
    body: payload,
    // headers :{
    //   "Content-Type": "multipart/form-data",
    // },
  });
  // image1 = await image1.json();
}
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
        <button onClick={answer} className="btn">Answer</button>
        <button className="btn">Post</button>
      </div>
      <div>
        <h4>{ques} <button className="addPhoto">Add photo</button></h4>
      </div>
      <div className="photo">
         
        <input type={"file"} name={"testImage"} onChange={imageUpload}/>
        <button onClick={postPhoto}>Upload Photo</button>
      </div>
    </div>
  );
};

export default UserEngagement;
