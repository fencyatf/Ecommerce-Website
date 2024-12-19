import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import './index.css'
import './loginPage.css'
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RootLayout from './components/RootLayout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<Products />}/>
        <Route path='loginpage' element={<LoginPage />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />    
)

