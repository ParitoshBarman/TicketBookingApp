import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'


const TicketView = () => {
  const param = useParams()
  const [ticketData, setticketData] = useState({});
  const [error, seterror] = useState(false);
  const [deletDone, setdeletDone] = useState(false);


  function fetchData() {
    axios.get(`http://localhost:3000/tickets/${param.id}`)
      .then((res) => {
        setticketData(res.data);
        seterror(false)
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error:" + err);
        seterror(true)
      })
  }


  console.log(param);
  console.log(param.id);
  if (param.id == undefined) {
    return <Navigate to="/tickets" />
  }

  useEffect(() => {
    fetchData()
  }, [])

  function deleteTicket() {
    axios.delete(`http://localhost:3000/tickets/${param.id}`)
      .then((res) => {
        setdeletDone(true)
        seterror(false);
      })
      .catch((err) => {
        seterror(true);
      })
  }

  if (deletDone) {
    return (
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Ticket has been successfully deleted!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thanks for your time happy booking.
        </AlertDescription>
      </Alert>
    )
  }

  if (error) {
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Ticket Not Found!</AlertTitle>
        <AlertDescription>This ticket is deleted or not created.</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className='tckt'>
      <div className="ticket-view" id="ticket-view">

        <div className="ticket-details">
          <div id="ticket-description">{ticketData.title}</div>
          {/* <div id="ticket-assignee">Helo</div> */}
          <div id="ticket-status">{ticketData.status}</div>
          <div id="ticket-priority">{ticketData.priority}</div>
        </div>
        <div className="button-container">
          <a id="edit-button" className="button" href="#">Edit</a>
          <button className="button delete-button" onClick={deleteTicket}>Delete</button>
        </div>
      </div>


    </div>
  )
}

export default TicketView
