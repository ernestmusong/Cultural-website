import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventDetails = ({ detail }) => (
  <>
    <div className="container project-details">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={detail.img} alt="event" className="img-fluid" />
        </div>
        {/* project text */}
        <div className="col-10 my-3 mx-auto  col-md-6  text-capitalize">
          <h1 style={{ color: 'Var(--heroWhite)' }}>
            {detail.title}
            {' '}
          </h1>

          <p style={{ color: 'Var(--softWhite)' }}>{detail.body}</p>
          <div>
            <Link to="/events">
              <button type="button" className="btns">back to events</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

EventDetails.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default EventDetails;
