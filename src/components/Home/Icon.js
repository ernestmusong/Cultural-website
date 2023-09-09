import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import IconDetails from './IconDetails';

const Icon = () => {
  const { id } = useParams();
  const { greatIcons } = useSelector((store) => store.greatIcons);
  const member = greatIcons.find((item) => item.id === Number(id));
  return (

    <>
      <IconDetails member={member} />
    </>

  );
};
export default Icon;
