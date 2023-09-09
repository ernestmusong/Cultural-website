import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Title3 from '../Headings/Title3';

function ContributePage() {
  const { branches } = useSelector((store) => store.branches);
  return (
    <>
      <div className="title3-wrapper">
        <Title3 title="select your branch" />
      </div>

      <div className="contribute-page">
        {branches.map((branch) => (
          <Link to={`/treasurer/${branch.id}`} key={branch.id} className="contribute-page-child bg-light">
            {branch.name}
          </Link>
        ))}
      </div>
      <div className="mx-auto text-center">
        {' '}
        <Link to="/all-projects" className="text-white">Back to projects</Link>
      </div>
    </>
  );
}

export default ContributePage;
