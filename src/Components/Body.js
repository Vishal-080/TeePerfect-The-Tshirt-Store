import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from './Login';
import Register from "./Register";
import Home from "./Home";
import { RouterProvider } from 'react-router-dom';
import Blog from './Blog';
import Categories from './Categories';
import Brand from './Brand';

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
    },
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/categories",
      element: <Categories/>
    },
    {
      path: "/brand",
      element: <Brand/>
    }
  ])

  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body;