import React, {useEffect, useState} from 'react'
import {events} from '../../db.json'
import { Link } from 'react-router-dom';
  
const EventDetails = (props) => {
    
     const[event, setEvent] = useState({
      id: 1,
      url:"",
        img: "",
        title: "",
        amount:"",
        realised:"",
        status:"",
        body: "",
        desc: " "
     });
      
    
     const eventId =  props.match.params.eventId;
    
      useEffect(() =>{
        
        let event = events.find(event => event.id === eventId)
          setEvent(event)
         }
        
         , [ eventId])
         if(event.img === '') return null;

    return ( 
      <>
      <Details id={event.id} {...event} />
    </>
  );
}

const Details = ({img, title, body, children}) => {
  return (
    <>
      <div className="container project-details">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={require('../../Images/projectImages/'+ img)} alt="event" className="img-fluid" />
        </div>
        {/*project text*/}
        <div className="col-10 my-3 mx-auto  col-md-6  text-capitalize">
          <h1  style={{color:"Var(--heroWhite)"}}>{title} </h1>
          
            <p style={{color:"Var(--softWhite)"}}>{body}</p>
          <div>
            <Link to="/events">
              <button className='btns'>back to events</button>
            </Link>
          </div> 
        </div>
      </div>
    </div>
    </>
  )
}
 
 export default EventDetails