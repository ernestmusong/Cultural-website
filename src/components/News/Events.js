import React from 'react'
import Event from './Event';
import { useSelector } from 'react-redux';

const Events =()=>{
  const { events } = useSelector((store) => store.events);
  return(
    <>
    <div className="posts-container">
      {events.map(event => (
        <Event key={event.id} event={event}/>
      ))}
 </div>
 </>
  )
}


 

 
export default Events 