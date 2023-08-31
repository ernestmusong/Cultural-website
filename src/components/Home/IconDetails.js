import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IconDetails = ({ icon }) => (
  <div className="container  icon-details">

    {/* info */}
    <div className="row">
      <div className="col-10 my-3 col-md-6 mx-auto">
        <img src={icon.img} alt="project" className="img-fluid" />
      </div>

      <div className="col-10 my-3   col-md-6 mx-auto  text-capitalize">
        <h4 style={{ color: 'Var(--heroWhite)', fontSize: '1.2rem' }}>
          Name:
          {icon.name}
        </h4>
        <h4 style={{ color: 'Var(--softWhite)', fontSize: '1.2rem' }}>
          Profession:
          {icon.profession}
        </h4>
        {/* <h4 className="title-text text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase"> {company} </span>
          </h4> */}
        <p style={{ color: '#acaea9', fontSize: '12px' }}>{icon.work}</p>
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
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default IconDetails;
