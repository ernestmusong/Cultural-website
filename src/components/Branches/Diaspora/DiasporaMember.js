import React from 'react'
import DiasporaMemberProfile from './DiasporaMemberProfile';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const DiasporaMember = () => {
    const { id } = useParams();
    const { users } = useSelector((store) => store.users);
    const member = users.find(member => member.id === id);
    return ( 
        
          <>
          <DiasporaMemberProfile member={member} />
          </>
        
     );
}
 export default DiasporaMember;