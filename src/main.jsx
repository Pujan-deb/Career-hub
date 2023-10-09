import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Hompage from './Components/Home/Hompage.jsx';
import SingleJob from './Components/SingleJob.jsx';
import Showalljobs from './Components/Jobs/Showalljobs.jsx';
import AppliedJobs from './Components/Jobs/AppliedJobs.jsx';
import Error from './Components/Header/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hompage></Hompage>,
        errorElement: <Error></Error>
      },
      {
        path: "home",
        element: <Hompage></Hompage>
      },
      {
        path: "alljobs",
        element: <Showalljobs></Showalljobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "statistics",
        element: <Error></Error>
      },
      {
        path: "Blogs",
        element: <Error></Error>
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "Singlejob/:id",
        element: <SingleJob></SingleJob>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
