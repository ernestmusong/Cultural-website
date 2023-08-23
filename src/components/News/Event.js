import React from 'react'
import {Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Event=({event}) => {
    return (
        <article className="post-container">
         
            <img className="image" src={event.img} alt="project" />
            <div className='post-tiltle-wrapper'>
                <h4 className="heading text-capitalize">{event.title}</h4> 
                <p>{event.desc}</p>
            </div>
            <div className='post-footer d-flex justify-content-between'>
                <p className='text-uppercase text-danger'>{event.date}</p>      
               <Link to={`/event/${event.id}`}>Read more</Link>
            </div>
      </article>
        
        
    )
}

IconDetails.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

export default Event; 