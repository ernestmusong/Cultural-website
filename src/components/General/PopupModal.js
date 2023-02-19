import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function PopupModal() {

    const [show, setShow] = useState(true)
   const handleShow = () => {
        setShow(false);
    };
  return (
     <>
         <div className={"modal fade" + (show ? " show d-block" : " d-none")} id="exampleModalCenter" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" style={{backgrounColor:'white'}}>
                            <div className="modal-header">
                                <h5 className="modal-title text-danger text-uppercase mx-auto">Important !!!</h5>
                                <button type="button" className="close" onClick={()=>handleShow()}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-bold text-capitalize" style={{color:'#000000'}}>
                                <i>
                                    <strong>
                                       We are calling on all sons/daughters 
                                        of befang to help support the 
                                        pupils of G.S befang buy their exercise books for this accademic year comming september.<br/>
                                        <span className='text-danger'>Please make a small contribution</span> 
                                   </strong>
                                   
                                 </i>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=>handleShow()}>Close</button>
                            <Link to='/projects/3'><button type="button" className="btn btn-primary"  onClick={()=>handleShow()}>Read more</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
 
     </>
  )
}

export default PopupModal