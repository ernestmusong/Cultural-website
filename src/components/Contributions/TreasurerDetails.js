import React, { useState, useEffect } from 'react'
import Title3 from '../Headings/Title3';
import {Link } from "react-router-dom";
import { Branches } from '../../db.json';
import CallNow from '../General/CallNow';
import WhatsAppNow from '../General/WhatsAppNow';

const TreasurerDetails=(props) => {
    const[branch, setBranch] = useState({
        id: 1,
          name: "",
          treasurerName: "",
          treasurerNumber:"",
          treasurerTitle:"",
       });
       const branchId =  props.match.params.branchId;
    
       useEffect(() =>{
         
         let branch =Branches.find(branch => branch.id === branchId)
           setBranch(branch)
          }
         
          , [branchId])
      
  return (
    <div className='treasurer-details'>
         <Title3 title="send your contribution to this person" />
     <table className="table table-bordered mx-auto">
			<thead style={{backgroundColor:"#DCDCDC"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Position</th>
                    <th scope="col">Phone Number</th>
                </tr>
			</thead>
            <tbody>
                <tr className="bg-light" >
                    <td className='text-capitalize'>{branch.treasurerName}</td>
                    <td className='text-capitalize'>{branch.name}</td>
                    <td className='text-capitalize'>{branch.treasurerTitle}</td>
                    <td className='text-capitalize'>+{branch.treasurerNumber}</td>
                </tr>
            </tbody>
      </table>	
      <div className='col-md-8 col-lg-6 mx-auto callnow-container'>
          <CallNow number={`tel:+${branch.treasurerNumber}` }/>
          <WhatsAppNow number={`https://api.whatsapp.com/send?phone=${branch.treasurerNumber}` }/>
     </div>
     <div className='col-md-8 col-lg-6 mx-auto mt-2 treasurer-links'>
          <Link to='/contributors' className="text-white">
                See Contributions
          </Link>
          <Link to='/contribute-page' className="text-white">
                        Go Back
           </Link>
     </div>
    </div>
  )
}

export default TreasurerDetails