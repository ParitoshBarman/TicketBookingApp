import React from 'react'

const SingleTicket = (props) => {
  return (
    <div className="ticket-card">
        <div className="ticket-title">{props.title}</div>
        <div className="ticket-status">Status: {props.status}</div>
        <div className="ticket-priority">Priority: {props.priority}</div>
        <a href={`ticketview/${props.id}`} className="view-button">View</a>
    </div>
  )
}

export default SingleTicket
