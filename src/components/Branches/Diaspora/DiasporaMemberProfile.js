import React, { useState, useEffect } from 'react'
import diaspora from '../../../db.json'
 import { Link } from 'react-router-dom';
  
const DiasporaMemberProfile = (props) => {
    console.log(props)
    
     const[mem, setMem] = useState({
      id: 1,
        img: "",
        profession: "",
        name:"",
        title:"",
         info:""
     });
      
    
     const diasporaId =  props.match.params.diasporaId;
    
      useEffect(() =>{
        
        let diaspM = diaspora.befangDiaspora.find(mem => mem.id == diasporaId)
          setMem(diaspM)
         }
        
         , [diasporaId])
          
         if(mem.img == "") return null;

    return ( 
      <div className="container   beyoin-member-profile">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={require('../../../Images/diasporaImages/'+ mem.img)} alt="member" className="img-fluid" />
        </div>
        <div className="col-10 my-3   col-md-6 mx-auto  text-capitalize">
          <h2 style={{color:"Var(--heroWhite)", fontSize: "1.2rem"}}>Name: {mem.name} </h2>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Position: {mem.title} </h4>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>country: {mem.country} </h4>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Profession: {mem.profession ==""? "Undefined!" : mem.profession} </h4>
            <p  style={{color: "#acaea9", fontSize:"12px"}}>{mem.info ==""? `Please ${mem.name} register on the website to complete your profile` : mem.info}</p>
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
 



 export default DiasporaMemberProfile