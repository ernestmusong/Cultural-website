import React from 'react';
import PropTypes from 'prop-types';

const Title3 = ({ title }) => (
  <div className="title3 title3-1">
    <h1 className="text2">{title}</h1>
  </div>
);

Title3.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title3;
