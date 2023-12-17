import React from 'react'
import { Outlet } from 'react-router-dom'
import RyMNavbar from '../RyMNavbar/RyMNavbar'
import RyMFooter from '../RyMFooter/RyMFooter'


const RootLayout = () => {
  return (
    <>
      <RyMNavbar/>
        <main>
          <Outlet/>
        </main>
      <RyMFooter/>
    </>
  )
}

export default RootLayout