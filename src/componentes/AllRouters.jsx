import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Tickets from '../pages/Tickets'
import TicketView from '../pages/TicketView'
import TicketEdit from '../pages/TicketEdit'
import Login from '../pages/Login'
import TicketCreate from '../pages/TicketCreate'
import Logout from '../pages/Logout'


const AllRouters = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
        <Route path="/ticketview" element={<TicketView/>}/>
        <Route path="/ticketedit" element={<TicketEdit/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ticketcreate" element={<TicketCreate/>}/>
        <Route path="/logout" element={<Logout/>}/>

      </Routes>
    </>
  )
}

export default AllRouters
