import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import Title from '../Headings/Title';
import Title2 from '../Headings/Title2';

const NgienDevForum = () => {
  const { forums } = useSelector((store) => store.forums);
  const members = forums.filter((f) => f.forum === 'ngien');
  const memberSavings = members.map((m) => {
    const { savings } = m;
    const amounts = savings.map((s) => s.amt);
    const total = amounts.reduce((a, b) => a + b);
    return total;
  });
  const budget = memberSavings.reduce((a, b) => a + b, 0);
  return (
    <>
      <div className="page-hero" id="hero-img">
        <h1 className="page-hero-text">Welcome to Ngien Development Forum</h1>
        <div className="beyoin-counter">
          <div
            style={{
              backgroundColor: 'var(--darkBlue)', padding: '10px', display: 'flex', justifyContent: 'space-around', width: '100%',
            }}
          >
            <div>
              <h6 className=" text-capitalize" style={{ color: 'var(--mainOrange)' }}>members</h6>
              <h2 className="value">
                <CountUp
                  start={0}
                  end={members.length}
                  duration={3}
                />
              </h2>
            </div>
            <div>
              <h6 className=" text-capitalize" style={{ color: 'var(--mainOrange)' }}>budget</h6>
              <h2 className="value">
                {budget}
                cfa
              </h2>
            </div>
          </div>

        </div>
        <h6 className="motto">no ngien, no Befang</h6>
        <Link className="text-uppercase text-warning" style={{ textDecoration: 'underline' }} to="/ngien/meetings">Check meetings minutes!</Link>
      </div>
      <WhoWeAre />
      <Title title="all members" />
      <br />
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
        <p className="text-white">Year: 2024</p>
      </center>
      <div>
        <table className="table table-bordered">
          <thead style={{ backgroundColor: '#DCDCDC' }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Shares</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (<Member key={member.id} member={member} />))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const Member = ({ member }) => {
  const {
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
      <td className="text-capitalize">{shares}</td>
    </tr>
  );
};
const WhoWeAre = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="who we are" />
        <p style={{ color: 'Var(--softWhite)' }}>
          We are proud Sons and Daughters of Befang, who identify
          as
          {' '}
          <span className="text-uppercase" style={{ color: 'Var(--lightGreen)' }}> Ngien people </span>
          {' '}
          ,
          and share a common goal of development.
          Our sole objective is the development of our Quarter - Ngien
          in particular, and Befang at large.
          {' '}
          Membership is open to anyone who shares our mission, vision, and values.
          {' '}
          Membership fee is
          {' '}
          <span className="text-warning">1000 CFA</span>
          {' '}
          renewable annually at
          {' '}
          <span className="text-warning">500 CFA</span>
        </p>
      </div>
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="what we do" />
        <p style={{ color: 'Var(--softWhite)' }}>
          We bring together our initiatives to provide solutions to
          some of the outstanding problems our people face.
        </p>
      </div>
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="our mission" />
        <p style={{ color: 'Var(--softWhite)' }}>
          Human and Infrastructural development.
        </p>
      </div>
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="our vision" />
        <p style={{ color: 'Var(--softWhite)' }}>
          To Be refered as &quot;The-Quarter-to-be&quot; in Befang.
        </p>
      </div>
    </div>
  </div>

);

Member.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NgienDevForum;
