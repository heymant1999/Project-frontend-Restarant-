import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const Title =()=>(
    <a href="./">
    <img className="logo" alt="logo" src="https://i.pinimg.com/564x/a7/6c/b0/a76cb0f1ab6950f4884c8c07fb3721e4.jpg"
    />
    </a>
  );

function  Header() {
    const [isLoggedIn,setisLoggedIn]=useState(false);
    return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
         <Link to="/about">
          <li>About</li>
          </Link>
         <Link to="/contact"> <li>
            Contact</li>
         </Link>
          <li>Cartt</li>
        </ul>
      </div>
      {
        isLoggedIn?(<button onClick={()=>setisLoggedIn(false)}>Logout</button>):
        (<button onClick={()=>setisLoggedIn(true)}>Login</button>)
      }
    </div>
    );
  }
  export default Header