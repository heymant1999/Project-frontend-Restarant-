import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError()
console.log(err)
  return (
    <div>
      <h1>Ooppss!!!!!!!! </h1>
      <h2>{err.status +" "+ err.StatusText}</h2>
    </div>
  )
}

export default Error
