import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import Title from '../../Headings/Title';
import Title2 from '../../Headings/Title2';

const BefangDiaspora = () => {
  const { users } = useSelector((store) => store.users);
  const members = users.filter((m) => m.branch === 'diaspora');
  const executiveMembers = members.filter((m) => m.executive === true);
  return (
    <>
      <div className="page-hero" id="hero-img">
        <h1 className="page-hero-text">Welcome to BEFANG Diaspora Community</h1>
        <div className="beyoin-counter">
          <div
            className="text-center"
            style={{
              backgroundColor: 'var(--darkBlue)', padding: '10px', display: 'grid', placeItems: 'center',
            }}
          >
            <div>
              <h6 className=" text-capitalize" style={{ color: 'var(--mainOrange)' }}>members</h6>
              <h1 className="value">
                <CountUp
                  start={0}
                  end={67}
                  duration={3}
                />
              </h1>
            </div>
          </div>

        </div>
        <h6 className="motto">slogan : no place is sweet like home</h6>
        <Link className="text-uppercase" style={{ color: 'var(--mainOrange)', textDecoration: 'underline' }} to="/contributors">check your contributions here!</Link>
        <br />
        <Link className="text-uppercase" style={{ color: 'red', textDecoration: 'underline' }} to="/comming-soon">read our constitution</Link>
      </div>
      <WhoWeAre />
      <Title title="executive members of the Group" />

      <div className="row becuda-executive">
        {executiveMembers.map((member) => (
          <ExMember key={member.id} member={member} />
        ))}
      </div>

      <Title title="all our members" />
      <div>
        <table className="table table-bordered">
          <thead style={{ backgroundColor: '#DCDCDC' }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
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
      <br />
      {' '}
      <Link to={`/diaspora-member/${member.id}`} style={{ color: 'Var(--mainOrange)' }}>See Profile</Link>
    </td>
    <td className="text-uppercase">{member.country}</td>
  </tr>
);

const ExMember = ({ member }) => (
  <div className="becuda-member">
    <div className="becuda-image-wrapper">
      <img src={member.img} alt="project" />
    </div>

    <div className="py-2 ml-2">
      <h4 className="text-uppercase" style={{ color: 'Var(--mainOrange)' }}>{member.name}</h4>
      <p className="text-capitalize" style={{ color: 'Var(--heroWhite)' }}>{member.title}</p>
    </div>
  </div>
);
const WhoWeAre = () => (
  <div className="container">
    <div className="row">

      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="who we are" />
        <p style={{ color: 'Var(--softWhite)' }}>
          We are proud Sons and Daughters of Befang. Befang Diaspora Community (BDC)
          is a group of members belonging to the Befang village but living out of
          Cameroon. It primarily operates on WhatsApp created by
          {' '}
          <span className="text-uppercase" style={{ color: 'Var(--lightGreen)' }}> Mrs Florence Chewachong Ndum Amah </span>
          who is currently the president of the Community.
          The group currently has about 67 members.
          Membership is fee is
          {' '}
          <span className="text-warning">25000 CFA</span>
          {' '}
          renewable annually at
          {' '}
          <span className="text-warning">10000 CFA</span>
          {' '}
          limited only to all sons and daughters of Befang living out of Cameroon. Just contact
          {' '}
          <a href="https://api.whatsapp.com/send?phone=905452522743">+905452522743</a>
          {' '}
          to join.
        </p>
      </div>
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="what we do" />
        <p style={{ color: 'Var(--softWhite)' }}>
          Say something here
        </p>
      </div>
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="our mission" />
        <p style={{ color: 'Var(--softWhite)' }}>
          Say something here
        </p>
      </div>
      <div className="col-sm-9 col-md-8 col-lg-6 mx-auto text-center">
        <Title2 title="our vision" />
        <p style={{ color: 'Var(--softWhite)' }}>

          Say something here

        </p>
      </div>
    </div>
  </div>

);

Member.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
ExMember.propTypes = {
  member: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BefangDiaspora;
