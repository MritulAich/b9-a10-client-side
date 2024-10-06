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
import AuthProvider from './component/AuthProvider';
import PrivateRoute from './component/routes/PrivateRoute';
import CountrySpot from './component/CountrySpot';
import Weather from './component/routes/Weather';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/addTouristsSpot',
        element: <PrivateRoute> <AddTouristsSpot></AddTouristsSpot></PrivateRoute>
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://trip-voyage-server.vercel.app/spot/${params.id}`)
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://trip-voyage-server.vercel.app/spot')
      },
      {
        path: '/updatePage/:id',
        element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://trip-voyage-server.vercel.app/spot/${params.id}`)
      },
      {
        path:'/countrySpot/:id',
        element:<CountrySpot></CountrySpot>,
        loader: ({ params }) => fetch(`https://trip-voyage-server.vercel.app/countries/${params.id}`)
      },

      {
        path: '/weather',
        element: <Weather></Weather>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
