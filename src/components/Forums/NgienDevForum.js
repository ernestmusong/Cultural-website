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
                  end={67}
                  duration={3}
                />
              </h2>
            </div>
            <div>
              <h6 className=" text-capitalize" style={{ color: 'var(--mainOrange)' }}>budget</h6>
              <h2 className="value">0cfa</h2>
            </div>
          </div>

        </div>
        <h6 className="motto">no ngien, no Befang</h6>
        <Link className="text-uppercase text-muted" style={{ textDecoration: 'underline' }} to="/ngien/meetings">Check meetings here!</Link>
      </div>
      <WhoWeAre />
      <Title title="all our members" />
      <div>
        <table className="table table-bordered">
          <thead style={{ backgroundColor: '#DCDCDC' }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
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

const Member = ({ member }) => (

  <tr className="bg-light" key={member.id}>
    <td className="text-capitalize">
      {member.name}
    </td>
    <td className="text-uppercase">{member.position}</td>
  </tr>
);
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
