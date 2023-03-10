import React from 'react'
import {Link } from "react-router-dom";
import Title3 from '../Headings/Title3';
import { Branches } from '../../Data';
function ContributePage() {
  return (
    <>
         <div className='title3-wrapper'>
            <Title3 title="select your branch" />
         </div>
        
         <div className='contribute-page'>
             {Branches.map(branch => (
                <Link to={`/branches/${branch.id}`} key={branch.id}  className='contribute-page-child bg-light'>
                         {branch.name}
                </Link>
             )

             )}
         </div>
        <div className='mx-auto text-center'> <Link to='/all-projects' className="text-white">Back to projects</Link></div>
    </>
  )
}

export default ContributePage