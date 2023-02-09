import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./About";
import Error from './Error';
import Contact from './Contact';
import Body from './Body';
import RestaurentDetail from './RestaurentDetail';


const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[{
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },{
    path:"/restuarant/:resId",
    element:<RestaurentDetail/>
  }]
  }
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter}/>
);


