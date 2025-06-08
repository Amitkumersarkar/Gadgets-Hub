import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/MainLayout/Root';
import Hero from './components/Header/Hero';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import Home from './components/HomePage/Home';
import Details from './components/AllProducts/Details';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/AllProducts/Statistics';
import Profile from './components/Header/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        index: true,
        element: <Hero></Hero>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: 'details/:product_id',
        element: <Details></Details>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
