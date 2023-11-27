import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tranzaction from './Tranzaction';

const TranzactionsPage = () => {
  const { id } = useParams();
  const { forums } = useSelector((store) => store.forums);
  const members = forums.filter((f) => f.forum === 'ngien');
  const member = members.find((member) => member.id === id);
  const { savings, name } = member;
  const amounts = savings.map((s) => s.amt);
  const total = amounts.reduce((a, b) => a + b, 0);
  return (
    <main style={{ width: '100%', padding: 0 }}>
      <h1 className="page-hero-text">Development Levy</h1>
      <br />
      <div>
        <center
          style={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            textTransform: 'uppercase',
            paddingTop: '0.5rem',
          }}
        >
          <p>{name}</p>
          <p>
            Total:
            {' '}
            {total}
            {' '}
            cfa
          </p>
        </center>
        <table className="table table-bordered">
          <thead style={{ backgroundColor: '#DCDCDC' }}>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <Tranzaction member={member} />
          </tbody>
        </table>
        <Link to="/ngien" style={{ textDecoration: 'underline', color: 'yellow' }}>
          Go Back
        </Link>
      </div>
    </main>

  );
};
export default TranzactionsPage;
