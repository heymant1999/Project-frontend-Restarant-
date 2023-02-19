import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError()
console.log(err)
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong</h2>
      <p>{`${err}`}</p>
    </div>
  )
}

export default Error
