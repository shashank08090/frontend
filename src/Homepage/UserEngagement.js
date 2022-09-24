import React from 'react'
import "./UserEngagement.css"

const UserEngagement = () => {
  return (
    <div>
      {/* <h1>Hiiii User</h1> */}
      <div className='all'>      
        <input className='input' type={"textbox"} placeholder="What do you want ?"></input>
        <br></br>
        <button className='btn'>Ask</button>
        <button className='btn'>Answer</button>
        <button className='btn'>Post</button>
      </div>

    </div>
  )
}

export default UserEngagement
