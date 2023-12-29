import React from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const Hero = () => {
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
  );
};

export default Hero;
