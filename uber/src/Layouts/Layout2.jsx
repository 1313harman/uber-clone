import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from '../components/Header2'
import HeaderLeft from '../components/HeaderLeft'
import Header from '../components/Header'
import MapComponent from '../components/MapComponent'

function Layout2() {
  return (
    <>
        <Header2/>
        
        <div className='flex flex-row justify-center items-center'>
          <MapComponent /> 
        </div>
        <Outlet/> 
  
    </>
  )
}

export default Layout2