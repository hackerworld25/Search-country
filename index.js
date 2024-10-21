import { createRoot } from "react-dom/client"
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./components/Home";
import Countrydetail from "./components/Countrydetail"


  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[{
        path: "/",
        element: <Home/>
      },
      {
        path: '/:Country',
        element: <Countrydetail/>
      }
    ]
    },
  ]);
const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)