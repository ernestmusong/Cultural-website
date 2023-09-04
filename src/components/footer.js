import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="container footer-bg py-4">
        <div className="row d-flex flex-column justify-content-around align-items-center">
          <div>
            <p className="text-light footer-p">
              Copyright &copy;
              {' '}
              <span id="date">{date}</span>
              <span className=" ml-2 mr-2" style={{ color: 'Var(--mainOrange)' }}>BECUDA</span>
              All rights reserved.

            </p>
          </div>
          <div>
            <p className="footer-p text-center text-capitalize text-light">
              Created by
              <span className=" text-uppercase"><a href="https://engineeringec.com/" className=" text-uppercase" style={{ color: 'Var(--mainOrange)' }} target="_blank" rel="noreferrer">green engineering and consultancy ltd</a></span>
            </p>
          </div>
          <div>
            <p className="footer-p text-center text-b text-muted">Powered By React + Node + mongoDB </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
