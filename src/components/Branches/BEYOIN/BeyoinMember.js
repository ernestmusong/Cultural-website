import React from 'react'
import BeyoinMemberProfile from './BeyoinMemberProfile';
import { useParams } from 'react-router-dom';

  const BeyoinMember = () => {
    const { id } = useParams();
    const { users } = useSelector((store) => store.users);
    const member = users.find(member => member.id === id);
    return ( 
        
          <>
          <BeyoinMemberProfile member={member} />
          </>
        
     );
}
 export default BeyoinMember;