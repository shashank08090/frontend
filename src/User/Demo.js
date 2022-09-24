import React from 'react'

export default function Demo() {
    const auth = localStorage.getItem('developers');
  return (
    <div><>
    <h1>Welcome To Demo Page</h1>
        {
            auth ? 
            <>
      <h3>Its Just Demo A Page</h3>
      <p>Visible only when you are Logged In</p>
      </> :
      <h3>Please Login </h3>

        }

    </>
    </div>
  )
}
