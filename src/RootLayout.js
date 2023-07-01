import React from 'react'
import Navigationbar from './components/navigationbar/Navigationbar'
import{ Outlet} from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        {/*nav bar*/}
       
        <Navigationbar/>
        {/*placeholder*/}
        <Outlet/>
    </div>
  )
}

export default RootLayout