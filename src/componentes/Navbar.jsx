import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Navbar = () => {
  let allLinks = [
    {
      to: "",
      label: "Home"
    },
    {
      to: "/contact",
      label: "Contact"
    },
    {
      to: "/about",
      label: "About"
    },
    {
      to: "/tickets",
      label: "Tickets"
    },
    {
      to: "/ticketview",
      label: "Ticket View"
    },
    {
      to: "/ticketedit",
      label: "Ticket Edit"
    },
    {
      to: "/ticketcreate",
      label: "Ticket Create"
    },
    {
      to: "/login",
      label: "Login"
    },
  ]

  const {isLogin, setislogin} = useContext(AuthContext);
  // setislogin(true);
  return (
    <nav>
      {/* {allLinks.map((itm, indx)=>{
        return (<>
        <Link to={itm.to} key={indx}>{itm.label}</Link>
        </>)
      })} */}

      <Link to="" >Home</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/about" >About</Link>
      <Link to="/tickets" >Tickets</Link>
      <Link to="/ticketview" >Ticket View</Link>
      <Link to="/ticketedit" >Ticket Edit</Link>
      <Link to="/ticketcreate" >Ticket Create</Link>
      {isLogin?<Link to="/logout" >LogOut</Link>:<Link to="/login" >Login</Link>}
      


    </nav>
  )
}

export default Navbar
