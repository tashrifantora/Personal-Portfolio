import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/about-me",
        element: <AboutMe></AboutMe>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='md:mx-10 lg:mx-52'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
