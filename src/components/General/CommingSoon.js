import React from 'react'
import {Link}  from "react-router-dom";

function CommingSoon({title}) {
    if(title ===undefined ){
        title="comming soon"
    }
    return (
        <div className="container h-100" style={{height:"100vh"}}>
            <div className="row mx-auto h-100 w-100" style={{height:"100vh"}}>
                <div className="col-12 d-flex flex-column align-items-center justify-content-center"style={{height:"100vh"}}>
                     <h1 className="text-align-center text-capitalize text-bold" style={{color:"Var(--heroWhite)"}}>
                        {title}
                     </h1>
                     <Link to='/' className="text-white">
                        Go Back
                   </Link>
                </div>
            </div>
        </div>
    )
}

export default CommingSoon