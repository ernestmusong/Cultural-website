import React from 'react'
import {Link } from "react-router-dom";
const Project = ({item}) => {
    return (
        <div className="post-container">
         
        <img className="image" src={require('../../Images/projectImages/'+item.img)} alt="project" />
        <h4 className="heading text-capitalize">{item.title}</h4> 
        <p>{item.desc}</p>
        <div className='post-footer'>      
          <Link to={`/projects/${item.id}`}>Read more</Link>
          <Link to={item.url}>Contribute</Link>
        </div>
      </div>
        
        
    )
}

export default Project