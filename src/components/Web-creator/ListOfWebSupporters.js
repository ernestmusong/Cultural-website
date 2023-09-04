import React from 'react';
import { Link } from 'react-router-dom';
import Title3 from '../Headings/Title3';
import data from '../../data';
import CommingSoon from '../General/CommingSoon';

const ListOfSupporters = () => {
  const { webSupporters } = data;
  const supporters = webSupporters;

  if (supporters.length === 0) return <CommingSoon title="there are no supporters at the moment!" />;
  return (
    <div>
      <Title3 title="thank you all for supporting the website" />
      <table className="table table-bordered">
        <thead style={{ backgroundColor: '#DCDCDC' }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Branch</th>
          </tr>
        </thead>
        <tbody>
          {supporters.map((supporter) => (
            <tr className="bg-light" key={supporter.id}>
              <td>{supporter.name}</td>
              <td>{supporter.amount}</td>
              <td>{supporter.branch}</td>

            </tr>
          ))}

        </tbody>
      </table>
      <div className="col-md-8 col-lg-6 mx-auto mt-2 mb-3 treasurer-links">
        <Link to="/web-supporters" className="text-white">
          Support Now !
        </Link>

        <Link to="/" className="text-white">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ListOfSupporters;
