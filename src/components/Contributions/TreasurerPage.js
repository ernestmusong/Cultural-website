import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TreasurerDetails from './TreasurerDetails';

const TreasurerPage = () => {
  const { id } = useParams();
  const { brances } = useSelector((store) => store.brances);
  const branch = brances.find((b) => b.id === id);
  return (

    <>
      <TreasurerDetails branch={branch} />
    </>

  );
};
export default TreasurerPage;
