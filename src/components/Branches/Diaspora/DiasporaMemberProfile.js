import React, { useState, useEffect } from 'react'
 import { Link } from 'react-router-dom';
  
const DiasporaMemberProfile = ({member}) => {
    return ( 
      <div className="container   beyoin-member-profile">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={member.img} alt="member" className="img-fluid" />
        </div>
        <div className="col-10 my-3   col-md-6 mx-auto  text-capitalize">
          <h2 style={{color:"Var(--heroWhite)", fontSize: "1.2rem"}}>Name: {member.name} </h2>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Position: {member.title} </h4>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>country: {member.country} </h4>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Profession: {member.profession ==""? "Undefined!" : mem.profession} </h4>
            <p  style={{color: "#acaea9", fontSize:"12px"}}>{member.info ==""? `Please ${member.name} register on the website to complete your profile` : mem.info}</p>
          <div>
            <Link to="/diaspora">
              <button className='btns'>Go back</button>
            </Link>
          </div>
           
            
        </div>
      </div>
    </div>
  );
}
 
DiasporaMemberProfile.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};


 export default DiasporaMemberProfile