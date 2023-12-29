import React from 'react';
import Title2 from '../Headings/Title2';

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

export default WhoWeAre;
