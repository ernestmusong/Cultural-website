import React from 'react'
import { Link } from 'react-router-dom';
import {greatIcons} from '../../db.json'


const GreatIcons =()=>{
    let members = greatIcons;
  return(
     <div className='container mb-4'>
        <div className=' great-icons'>
            {members.map(member => (
              <Member key={member.id} {...member}/>
            ))}
      </div>
     </div>
  )
}
const Member=({profession, name, img, id}) => {
    return (
      <div className=' becuda-member'>
      <div className='becuda-image-wrapper'>
       <img src={require('../../Images/iconsImages/'+img)} alt="project" />
      </div> 
     
      <div className='py-2 pl-2' style={{width:"100%", color:"Var(--mainOrange)", backgroundColor: "Var(--darkBlue)", fontWeight:"bolder"}}>
      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{name}</h4>      
      <p className='text-capitalize' style={{ color:"Var(--mainOrange)"}}>{profession}</p>
      <Link to={`/icons/${id}`} style={{color:"Var(--heroWhite)"}}>Read More</Link> 
      </div>
   </div>
    )
}

 

 
export default GreatIcons