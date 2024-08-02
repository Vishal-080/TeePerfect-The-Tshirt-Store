import React from 'react';
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import Login from './Login';
import Register from "./Register";
import Home from "./Home";
import Blog from './Blog';
import Categories from './Categories';
import Brand from './Brand';
import Pages from "./Pages";
// import Header from './Header';
import AppLayout from './AppLayout';

const Body = () => {

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
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
        },
        {
          path: "/pages",
          element: <Pages/>
        }
      ],
    },
   
  ])

  return (
    <div>
      
      <RouterProvider router={AppRouter}>
        <AppLayout/>
      </RouterProvider>

    </div>
  )
}

export default Body;