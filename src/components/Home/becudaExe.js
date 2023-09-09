import React from 'react';
import { useSelector } from 'react-redux';

const BecudaExe = () => {
  const { executives } = useSelector((store) => store.executives);
  return (
    <div>
      <table className="table table-bordered">
        <thead style={{ backgroundColor: '#DCDCDC' }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">position</th>
          </tr>
        </thead>
        <tbody>
          {executives.map((member) => (
            <tr className="bg-light" key={member.id}>
              <td className="text-uppercase">{member.name}</td>
              <td className="text-uppercase">{member.position}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default BecudaExe;
