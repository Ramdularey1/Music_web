import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import Type from '../Type'
import Footer from '../Footer'
import MusicContainer from '../MusicContainer'

const RootLayout = () => {
  return (
    <>
    <NavBar />
    <Type />
    <Outlet />
    <MusicContainer />
    <Footer />
    </>
  )
}

export default RootLayout