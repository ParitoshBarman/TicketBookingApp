import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import CardsView from '../componentes/CardsView'

const Tickets = () => {
  return (
    <div style={{padding:"50px"}}>
      <Button colorScheme='blue' float="right" onClick={()=>{window.location.href="/ticketcreate"}}>Create Ticket</Button>
    <CardsView/>
      
    </div>
  )
}

export default Tickets
