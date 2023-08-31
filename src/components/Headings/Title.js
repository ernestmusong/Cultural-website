import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div style={{ margin: '0 auto', marginBottom: '5rem', marginTop: '5rem' }}>
    <h1 className="text1">{title}</h1>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
