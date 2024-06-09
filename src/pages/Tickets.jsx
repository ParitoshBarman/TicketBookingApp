import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Tickets = () => {
  return (
    <div style={{padding:"50px"}}>
      <Button colorScheme='blue' float="right" onClick={()=>{window.location.href="/ticketcreate"}}>Create Ticket</Button>
      
    </div>
  )
}

export default Tickets
