import React from 'react'
import {Link } from "react-router-dom";

function ContributeNowLink() {
  return (
    <div className='col-md-8 col-lg-6 mx-auto mt-2 mb-3 treasurer-links'>
    <Link to='/contribute-page' className="text-white">
           Contribute now
    </Link>
    <Link to='/all-projects' className="text-white">
                  Go Back
     </Link>
</div>
  )
}

export default ContributeNowLink