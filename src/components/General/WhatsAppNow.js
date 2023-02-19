import React from 'react'
import {FaWhatsapp } from "react-icons/fa";

function WhatsAppNow({number}) {
  return (
    <>
     <a className='whatsapp-link' href={number}><FaWhatsapp style={{marginLeft:"10px"}} />WhatsApp</a>
    
    </>
  )
}

export default WhatsAppNow