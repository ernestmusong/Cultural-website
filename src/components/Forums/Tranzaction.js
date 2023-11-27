import React from 'react';
import PropTypes from 'prop-types';

const Tranzaction = ({ member }) => {
  const {
    savings,
    id,
  } = member;
  return (
    <tr className="bg-light" key={id}>
      {savings.map((s) => (
        <td key={s.id}>
          {s.date}
        </td>
      ))}
      {savings.map((s) => (
        <td key={s.id}>
          {s.amt}
          {' '}
          cfa
        </td>
      ))}
    </tr>
  );
};

Tranzaction.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Tranzaction;
