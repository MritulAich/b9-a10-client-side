import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Error from './component/routes/Error';
import Login from './component/routes/Login';
import Register from './component/routes/Register';
import AllTouristsSpot from './component/routes/AllTouristsSpot';
import AddTouristsSpot from './component/routes/AddTouristsSpot';
import MyList from './component/routes/MyList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path:'/addTouristsSpot',
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path:'/myList',
        element: <MyList></MyList>,
        loader:()=> fetch('http://localhost:5000/spot')
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
