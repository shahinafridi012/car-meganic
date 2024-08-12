import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Login/SingUp";
import About from "../Pages/Home/About/About";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        },{
          path: '/login',
          element: <Login></Login>
        },{
          path: '/signup',
          element: <SingUp></SingUp>
        },
        {
          path: '/about',
          element: <About></About>
        },{
          path: '/checkout/:id',
          element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },{
          path: '/bookings',
          element:<PrivateRoutes> <Bookings></Bookings></PrivateRoutes>
        }
      ]
    },
  ]);


  export default router