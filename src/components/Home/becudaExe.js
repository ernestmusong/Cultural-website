import React from 'react'
  import {becudaExecutive} from '../../db.json'
 

const BecudaExe =()=>{
  return(
    <div>
    <table className="table table-bordered">
<thead style={{backgroundColor:"#DCDCDC"}}>
         <tr>
             <th scope="col">Name</th>
             <th scope="col">position</th>
         </tr>
</thead>
     <tbody>
     {becudaExecutive.map(member =>(
              <tr className="bg-light" key={member.id}>
              <td className='text-uppercase'>{member.name}</td>
              <td className='text-uppercase'>{member.position}</td>  
          </tr>
             ))}
        
     </tbody>
</table>	
</div>
       
  )
}
 

 

 
export default BecudaExe