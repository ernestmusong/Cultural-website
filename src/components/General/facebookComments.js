import React from 'react'
import { useEffect} from 'react'
import { facebookComments} from '../../db.json'

function Comments() {
    
    let comments = facebookComments
       useEffect(() =>{
         if (window.FB) {
            window.FB.XFBML.parse();
        }
       }, []) 
        
  return (
    <div className='bg-light'>
    <div className="fb-comments" data-href={comments.dataHref} data-width={comments.dataWidth} data-numposts={comments.dataNumposts} data-colorscheme={comments.dataColorScheme}></div>
    </div>
  )
}

export default Comments