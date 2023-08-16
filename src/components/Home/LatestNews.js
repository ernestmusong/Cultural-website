import React from 'react'
import {events} from '../../db.json'
import Event from '../News/Event';
import { Link } from 'react-router-dom';

const LatestNews =()=>{
    let latestEvents = events.slice(events.length-3, events.length)
  return(
    <>
     <section className='latest-news mb-4'>
            {latestEvents.map(event => (
              <Event key={event.id} {...event}/>
            ))}
     </section>
     
     <button className='home-btn'>
           <Link to='/events'>go to news page</Link>
     </button>
     
    </>
  )
}
 

export default LatestNews