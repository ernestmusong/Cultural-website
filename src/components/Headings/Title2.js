import React from 'react';
import PropTypes from 'prop-types';

const Title2 = ({ title }) => (
  <div style={{ margin: '0 auto', marginBottom: '2rem', marginTop: '2rem' }}>
    <h1 className="text1">{title}</h1>
  </div>
);

Title2.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title2;
