import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../../features/auth/pages/LoginPage'
import RegisterPage from '../../features/auth/pages/RegisterPage'
import DashboardLyout from '../layouts/DashboardLyout'
import HomePage from '../../features/Dashboard/pages/HomePage'

const AppRoutes = () => {

    let router  =  createBrowserRouter([
        {
            path:"/",
            element: <AuthLayout />,
            children:[
                {
                    path:"",
                    element:<LoginPage /> 
                },

                 {
                    path:"register",
                    element:<RegisterPage /> 
                },

                 
            ]
        },

        {
            path:'dashboard', 
            element:<DashboardLyout />,
            children:[
                {
                    path:'',
                    element:<HomePage />
                }
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes