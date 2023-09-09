import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import TreasurerDetails from './TreasurerDetails';

const TreasurerPage = () => {
  const { id } = useParams();
  const { branches } = useSelector((store) => store.branches);
  const branch = branches.find((b) => b.id === Number(id));
  return (

    <>
      <TreasurerDetails branch={branch} />
    </>

  );
};
export default TreasurerPage;
