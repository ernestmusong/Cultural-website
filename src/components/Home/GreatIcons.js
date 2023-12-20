import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const GreatIcons = () => {
  const { greatIcons } = useSelector((store) => store.greatIcons);
  return (
    <div className="container mb-4">
      <div className=" great-icons">
        {greatIcons.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
const Member = ({ member }) => (
  <div className=" becuda-member">
    { member.rip && (
      <h5 className="text-uppercase text-center my-2" style={{ color: 'Var(--heroWhite)' }}>
        {member.rip}
      </h5>
    )}
    <div className="becuda-image-wrapper">
      <img src={member.img} alt="project" />
    </div>
    <div
      className="py-2 pl-2"
      style={{
        width: '100%', color: 'Var(--mainOrange)', backgroundColor: 'Var(--darkBlue)', fontWeight: 'bolder',
      }}
    >
      <h4 className="text-uppercase" style={{ color: 'Var(--mainOrange)' }}>{member.name}</h4>
      <p className="text-capitalize" style={{ color: 'Var(--mainOrange)' }}>{member.profession}</p>
      <Link to={`/icon/${member.id}`} style={{ color: 'Var(--heroWhite)' }}>Read More</Link>
    </div>
  </div>
);

Member.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default GreatIcons;
