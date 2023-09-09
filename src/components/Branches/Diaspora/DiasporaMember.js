import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DiasporaMemberProfile from './DiasporaMemberProfile';

const DiasporaMember = () => {
  const { id } = useParams();
  const { users } = useSelector((store) => store.users);
  const members = users.filter((m) => m.branch === 'diaspora');
  const member = members.find((member) => member.id === id);
  return (

    <>
      <DiasporaMemberProfile member={member} />
    </>

  );
};
export default DiasporaMember;
