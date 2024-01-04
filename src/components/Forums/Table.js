import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Table = () => {
  const { forums } = useSelector((store) => store.forums);
  const members = forums.filter((f) => f.forum === 'ngien');
  return (
    <div>
      <table className="table table-bordered">
        <thead style={{ backgroundColor: '#DCDCDC' }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Reg</th>
            <th scope="col">Shares</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (<Member key={member.id} member={member} />))}
        </tbody>
      </table>
    </div>
  );
};

const Member = ({ member }) => {
  const {
    reg,
    savings,
    name,
    position,
    id,
  } = member;
  const amounts = savings.map((s) => s.amt);
  const sum = amounts.reduce((a, b) => a + b);
  const shares = sum / 50000;
  return (
    <tr className="bg-light" key={id}>
      <td className="text-capitalize">
        {name}
        <br />
        <Link to={`/ngien/transactions/${id}`}>See tranzations</Link>
      </td>
      <td className="text-capitalize">{position}</td>
      <td className="text-capitalize">{reg}</td>
      <td className="text-capitalize">{shares}</td>
    </tr>
  );
};

Member.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Table;
