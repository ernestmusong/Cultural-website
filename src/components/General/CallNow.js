import React from 'react';
import PropTypes from 'prop-types';

function CallNow({ number }) {
  return (
    <>
      <a className="call-link" href={number}>call</a>
    </>
  );
}

CallNow.propTypes = {
  number: PropTypes.string.isRequired,
};

export default CallNow;
