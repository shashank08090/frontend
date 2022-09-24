import React from 'react'

export default function Profile() {
  return (
    <div>
      <h1>Hi {localStorage.getItem('developers')}</h1>
    </div>
  )
}
