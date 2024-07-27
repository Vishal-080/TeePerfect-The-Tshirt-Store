import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './Login';
import Register from "./Register";
import Home from "./Home";
import { RouterProvider } from 'react-router-dom';

const Body = () => {

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])

  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body;