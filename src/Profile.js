import React, { useEffect, useState } from 'react'

const Profilefunctional = (props) => {
  const[count,setCount]=useState(0)
  useEffect(()=>{

  },[])
  return (
    <div>
      <h2>Profilefunctional component is all about</h2>
      <h3> Name:{props.name}</h3>
      <h3>{count}</h3>
      <button onClick={()=>{
        setCount(1)
      }}>count</button>
    </div>
  )
}

export default Profilefunctional;
