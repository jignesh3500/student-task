import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Register from './pages/register'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate} from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import AuthGuard from "./auth/AuthGuard";

const DefaultRouter =()=>{
  const loginData =JSON.parse(localStorage.getItem('loginData'));
  if(loginData){
    return <Navigate to="/dashboard" replace/>
  }
      return <Navigate to="/login" replace/>
}
function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element: <DefaultRouter/>
    },
    {
      path: "/login",
      element:<AuthGuard required ={false}> 
      <Login />
      </AuthGuard>
    },
    {
       path: "/register",
      element:<AuthGuard required ={false}>
        <Register/>
        </AuthGuard>
    },
    {
       path: "/dashboard",
      element:<AuthGuard required ={true}>
        <Dashboard />
        </AuthGuard>
    }
  ])
  
  return <RouterProvider router={router}/>
}

export default App
