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
import UpdatePage from './component/routes/UpdatePage';
import ViewDetails from './component/ViewDetails';

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
        path: '/viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/spot/${params.id}`)
      },
      {
        path:'/myList',
        element: <MyList></MyList>,
        loader:()=> fetch('http://localhost:5000/spot')
      },
      {
        path:'/updatePage/:id',
        element: <UpdatePage></UpdatePage>,
        loader:({params})=> fetch(`http://localhost:5000/spot/${params.id}`)
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
