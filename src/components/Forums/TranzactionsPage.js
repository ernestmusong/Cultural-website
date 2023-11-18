import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tranzaction from './Tranzaction';

const TranzactionsPage = () => {
  const { id } = useParams();
  const { forums } = useSelector((store) => store.forums);
  const members = forums.filter((f) => f.forum === 'ngien');
  const member = members.find((member) => member.id === id);
  const { savings } = member;
  return (

    <>
      <main style={{ padding: '0 ! important', width: '100%', overflowX: 'scroll' }}>
        <h1 className="page-hero-text">Tranzaction details</h1>
        <table className="table table-bordered">
          <thead style={{ backgroundColor: '#DCDCDC' }}>
            <tr>
              <th scope="col">Name</th>
              {savings.map((s) => <th scope="col" key={s.id}>{s.date}</th>)}
            </tr>
          </thead>
          <tbody>
            <Tranzaction member={member} />
          </tbody>
        </table>
      </main>
    </>

  );
};
export default TranzactionsPage;
