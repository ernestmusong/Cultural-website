import React from 'react'
import {Link } from "react-router-dom";

const Event=({id, title, desc, img, date}) => {
    return (
        <div className="post-container">
         
            <img className="image" src={require('../../Images/projectImages/'+img)} alt="project" />
            <div className='post-tiltle-wrapper'>
                <h4 className="heading text-capitalize">{title}</h4> 
                <p>{desc}</p>
            </div>
            <div className='post-footer d-flex justify-content-between'>
                <p className='text-uppercase text-danger'>{date}</p>      
               <Link to={`/event/${id}`}>Read more</Link>
            </div>
      </div>
        
        
    )
}

export default Event; 