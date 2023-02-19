import React from 'react'
import {events} from '../../db.json'
import Event from './Event';

const Events =()=>{
  return(
    <>
    <div className="posts-container">
      {events.map(event => (
        <Event key={event.id} {...event}/>
      ))}
 </div>
 </>
  )
}


 

 
export default Events 