import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout