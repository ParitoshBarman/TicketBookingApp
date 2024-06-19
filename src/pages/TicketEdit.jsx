import React from 'react'
import '../App.css'
import { useState, useEffect, useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner
} from '@chakra-ui/react'
import axios from 'axios'


const TicketEdit = () => {
  const param = useParams()
  const [formData, setFormData] = useState({});
  const [frmSubmit, setfrmSubmit] = useState(false);
  const [error, seterror] = useState(false);
  const [loadin, setloadin] = useState(false);

  const titleInput = useRef(null);

  function formHandel(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function formSubmit(){
    setloadin(true);
    axios.patch(`http://localhost:3000/tickets/${param.id}`, formData)
      .then((res) => {
        setfrmSubmit(true)
        seterror(false)
        setloadin(false);
      })
      .catch((err) => {

        seterror(true)
        setfrmSubmit(false)
        setloadin(false);
      })
  }

  function fatchTicketData() {
    setloadin(true);
    axios.get(`http://localhost:3000/tickets/${param.id}`)
      .then((res) => {
        setFormData(res.data)
        console.log(res.data)
        seterror(false)
        setloadin(false);
      })
      .catch((err) => {

        seterror(true)
        
        setloadin(false);
      })
  }

  useEffect(()=>{
    fatchTicketData();
    titleInput.current.focus();
  },[])

  if (param.id == undefined) {
    return <Navigate to="/tickets" />
  }

  if (loadin) {
    return (
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    )
  }

  if (frmSubmit) {
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
          Ticket Edited!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Successfully Edited your Ticket. Happy Journey.
        </AlertDescription>
      </Alert>
    )
  }

  if (error) {
    return (
      <Alert status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert>
    )
  }
  return (
    <div className='formsec'>

      <div className="ticket-form">
        <h2>Edit Ticket</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" value={formData.title} id="title" ref={titleInput} name="title" onChange={formHandel} required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" value={formData.status} name="status" onChange={formHandel} required>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority" name="priority" value={formData.priority} onChange={formHandel} required>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button className="submit-button" onClick={formSubmit}>Save Ticket</button>
      </div>
    </div>
  )
}

export default TicketEdit
