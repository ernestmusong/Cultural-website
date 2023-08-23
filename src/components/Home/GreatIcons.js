import React from 'react'
import { Link } from 'react-router-dom';
import {greatIcons} from '../../db.json'


const GreatIcons =()=>{
    let members = greatIcons;
  return(
     <div className='container mb-4'>
        <div className=' great-icons'>
            {members.map(member => (
              <Member key={member.id} member={member}/>
            ))}
      </div>
     </div>
  )
}
const Member=({member}) => {
    return (
      <div className=' becuda-member'>
      <div className='becuda-image-wrapper'>
       <img src={member.img} alt="project" />
      </div> 
     
      <div className='py-2 pl-2' style={{width:"100%", color:"Var(--mainOrange)", backgroundColor: "Var(--darkBlue)", fontWeight:"bolder"}}>
      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{member.name}</h4>      
      <p className='text-capitalize' style={{ color:"Var(--mainOrange)"}}>{member.profession}</p>
      <Link to={`/icons/${member.id}`} style={{color:"Var(--heroWhite)"}}>Read More</Link> 
      </div>
   </div>
    )
}

 

 
export default GreatIcons