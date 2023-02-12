import React, { useEffect, useState,lazy,Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './App.css'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
// import Instamart from "./Instamart";
 

//chunking
//code splitting
//dynamic import
const Instamart = lazy(()=>import("./Instamart"))
const App =()=>{
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}





export default App;
