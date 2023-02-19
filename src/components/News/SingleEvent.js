import React from 'react'
import EventDetails from './EventDetails';

  const SingleEvent = (props) => {
     
    return ( 
        
          <>
          <EventDetails {...props} />
          </>
        
     );
}

 export default SingleEvent;