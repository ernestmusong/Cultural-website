import React, { useState, useEffect } from 'react'
import befangYouthsInitiative from '../../../db.json'
 import { Link } from 'react-router-dom';
 /**
  *@function BeyoinMemberProfile
  **/
const BeyoinMemberProfile = (props) => {
    console.log(props)
    
     const[member, setMember] = useState({
      id: 1,
        img: "",
        profession: "",
        name:"",
        title:"",
         info:""
     });
      
    
     const memberId =  props.match.params.memberId;
    
      useEffect(() =>{
        
        let member = befangYouthsInitiative.beyoin.find(member => member.id == memberId)
          setMember(member)
         }
        
         , [memberId])
          
         if(member.img == "") return null;

    return ( 
      <div className="container beyoin-member-profile">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={require('../../../Images/beyoinImages/'+ member.img)} alt="member" className="img-fluid" />
        </div>
        <div className="col-10 my-3   col-md-6 mx-auto  text-capitalize">
          <h2 style={{color:"Var(--heroWhite)", fontSize: "1.2rem"}}>Name: {member.name} </h2>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Position: {member.title} </h4>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Profession: {member.profession ==""? "Undefined!" : member.profession} </h4>
            <p  style={{color: "#acaea9", fontSize:"12px"}}>{member.info ==""? `Please ${member.name} register on the website to complete your profile` : member.info}</p>
          <div className='d-flex'>
            <Link to="/social-groups/beyoin">
              <button className='btns'>Go back</button>
            </Link>
            <Link to="/register">
              <button className='btns '>register now</button>
            </Link>
          </div>
           
            
        </div>
      </div>
    </div>
  );
}
 



 export default BeyoinMemberProfile