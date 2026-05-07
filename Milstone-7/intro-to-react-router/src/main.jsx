import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/root/Root';
import Mobiles from './components/Mobiles/Mobiles';
import Home from './components/Home/Home';
import Laptops from './components/Laptop/Laptops';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {}
    ]
  },
  // {
  //   path: 'blogs',
  //   element: <div>All my blogs here</div>
  // },
  // {
  //   path: "name",
  //   element: <div>My name is Rizuyan</div>
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
