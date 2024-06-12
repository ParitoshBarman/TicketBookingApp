import React from 'react'
import { useEffect, useState } from 'react'
import SingleTicket from './SingleTicket'
import axios from 'axios'

const CardsView = () => {
  const [data, setdata] = useState([])
  function ticketsFetch(){
    axios.get("http://localhost:3000/tickets")
    .then((res)=>{
      console.log(res);
      setdata(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  useEffect(()=>{
    ticketsFetch()
  }, [])
  return (
    <div className='cards-view'>
      {data.map((itm)=>{
        return ( <SingleTicket title={itm.title} status={itm.status} priority={itm.priority} key={itm.id} id={itm.id}/>)
      })}
      
      
    </div>
  )
}

export default CardsView
