import { Component, StrictMode, Suspense } from 'react'
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
import Users from './components/Users/Users';
import Users2 from './components/Users2/Users2';
import UserDetails from './components/UserDetails/UserDetails';


const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        Component: UserDetails
      }
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
