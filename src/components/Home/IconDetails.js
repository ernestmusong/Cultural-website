import React, { useState, useEffect } from 'react'
import GreatIcons from '../../db.json'
 import { Link } from 'react-router-dom';
 
 /**
  *@function IconDetails
  **/
const IconDetails = (props) => {
     const[icon, setIcon] = useState({
      id: 1,
        img: "",
        profession: "",
        name:"",
        work:"",
         
     });
      
    
     const iconId =  props.match.params.iconId;
    
      useEffect(() =>{
        
        let icon =GreatIcons.greatIcons.find(icon => icon.id == iconId)
          setIcon(icon)
         }
        
         , [ iconId])
         if(icon.img == "") return null;

    return ( 
      <div className="container  icon-details">
       
      {/*info*/}
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={require('../../Images/iconsImages/'+ icon.img)} alt="project" className="img-fluid" />
        </div>
         
        <div className="col-10 my-3   col-md-6 mx-auto  text-capitalize">
          <h4 style={{color:"Var(--heroWhite)", fontSize: "1.2rem"}}>Name: {icon.name} </h4>
          <h4 style={{color:"Var(--softWhite)", fontSize: "1.2rem"}}>Profession: {icon.profession} </h4>
          {/* <h4 className="title-text text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase"> {company} </span>
          </h4> */}
            <p style={{color: "#acaea9", fontSize:"12px"}}>{icon.work}</p>
          <div>
            <Link to="/">
              <button className='btns'>Go back</button>
            </Link>
          </div>
           
            
        </div>
      </div>
    </div>
  );
}
 



 export default IconDetails