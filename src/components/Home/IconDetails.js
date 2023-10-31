import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IconDetails = ({ member }) => (
  <div className="container  icon-details">
    {/* info */}
    <div className="row">
      <div className="col-10 my-3 col-md-6 mx-auto">
        <img src={member.img} alt="project" className="img-fluid" />
      </div>

      <div className="col-10 my-3   col-md-6 mx-auto  text-capitalize">
        <h4 style={{ color: 'Var(--heroWhite)', fontSize: '1.2rem' }}>
          Name:
          {member.name}
        </h4>
        <h4 style={{ color: 'Var(--softWhite)', fontSize: '1.2rem' }}>
          Profession:
          {member.profession}
        </h4>
        <p style={{ color: 'Var(softGrey)', fontSize: '12px' }}>{member.work}</p>
        <div>
          <Link to="/">
            <button type="button" className="btns">Go back</button>
          </Link>
        </div>

      </div>
    </div>
  </div>
);

IconDetails.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default IconDetails;
