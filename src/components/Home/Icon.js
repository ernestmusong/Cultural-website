import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconDetails from './IconDetails';

const Icon = () => {
  const { id } = useParams();
  const { greateIcons } = useSelector((store) => store.greateIcons);
  const icon = greateIcons.find((item) => item.id.toString() === id.toString());
  return (

    <>
      <IconDetails icon={icon} />
    </>

  );
};
export default Icon;
