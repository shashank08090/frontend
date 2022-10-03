import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import Pagination from "./Pagination";
import "./homepage.css";


export default function Question(props) {

  const [qna, setqna] = useState([]);
  const [page, setpage] = useState(1);
    const navigate = useNavigate();

   useEffect(()=>{
    fetch("http://localhost:5000/answer",{
      method: "GET",
    }).then((result)=>{
      result.json().then((resp)=>{
        setqna(resp)
      })
    })
   },[])
   console.log(qna)
    const datafromPagination = (k) => {
      console.log(k);
      // setpage(Math.ceil(k / 4));
      setpage(k);
    };
    const gotoHome = ()=>{
        navigate("/")
    }
    const style={
       backgroundColor:"#05C3DD",
       poition:"absolute",
       top:"0",
       right:"0",
       float:"right"

    }
  return (
    <div className='homepage'>
      
      {qna ? (
        <h1>
          {qna.map((result, index) => {
            console.log(result);
            if (index > page * 4 - 4 && index <= page * 4)
              return <p className="card">{result.question}</p>;
          })}
        </h1>
      ) : (
        <h1>still loading.... please wait</h1>
      )}
      <Pagination datafromPagination={datafromPagination} />

      <button style={style} onClick={gotoHome}>Ask Questions</button>
    </div>
  )
}

