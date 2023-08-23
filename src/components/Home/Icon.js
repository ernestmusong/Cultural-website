import React from 'react'
import IconDetails from './IconDetails';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

  const Icon = () => {
    const { id } = useParams();
  const { greateIcons } = useSelector((store) => store.greateIcons);
  const icon = greateIcons.find((item) => item.id.toString() === id.toString());
    return ( 
        
          <>
          <IconDetails icon={icon} />
          </>
        
     );
}
 export default Icon;