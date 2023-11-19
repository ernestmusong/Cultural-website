import React from 'react';
import PropTypes from 'prop-types';

const Tranzaction = ({ member }) => {
  const {
    savings,
    name,
    id,
  } = member;
  const amounts = savings.map((s) => s.amt);
  const total = amounts.reduce((a, b) => a + b);
  return (
    <tr className="bg-light" key={id}>
      <td className="text-capitalize">
        {name}
      </td>
      {savings.map((s) => (
        <td key={s.id}>
          {s.amt}
          cfa
        </td>
      ))}
      <td className="text-capitalize">
        {total}
      </td>
    </tr>
  );
};

Tranzaction.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Tranzaction;
