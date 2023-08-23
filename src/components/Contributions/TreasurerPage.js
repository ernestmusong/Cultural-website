import React from 'react'
import TreasurerDetails from './TreasurerDetails';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

  const TreasurerPage = () => {
    const { id } = useParams();
    const { users } = useSelector((store) => store.users);
    const member = users.find(member => member.id === id);
    return ( 
        
          <>
          <TreasurerDetails member={member} />
          </>
        
     );
}
 export default TreasurerPage;