import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mai from './components/layout/Main/Mai.jsx';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SingleInfo from './components/SingleInfo/SingleInfo';
import AuthProvider from './provider/AuthProvider';
import Booking from './components/Booking/Booking';
import UpdateForm from './UpdateForm/UpdateForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mai></Mai>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/booking/:id',
        element:<SingleInfo></SingleInfo>,
        loader:({params})=>fetch(`http://localhost:5000/specialist/${params.id}`)
      },
      {
        path:'/booking',
        element:<Booking></Booking>
      },
      {
        path:'/update/:id',
        element:<UpdateForm></UpdateForm>,
        loader:({params})=>fetch(`http://localhost:5000/booking/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
