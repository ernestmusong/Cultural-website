import React from 'react';
import PropTypes from 'prop-types';

const Title4 = ({ title }) => (
  <div className="title4">
    <h1 className="text2">{title}</h1>
  </div>
);

Title4.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title4;
