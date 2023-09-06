import React from 'react';
import { useSelector } from 'react-redux';

const Chief = () => {
  const { chiefs } = useSelector((store) => store.chiefs);
  return (
    <div className="container">
      <div className="row">
        {chiefs.map((chief) => (
          <div className="col-md-6 chief-container mx-auto my-2" key={chief.id}>
            <h5 className="text-uppercase text-center my-2" style={{ color: 'Var(--heroWhite)' }}>{chief.position}</h5>
            <div className="chief-wrapper">
              <img src={chief.chiefImg} alt="chief" />
            </div>

            <div className="py-2 ml-2">
              <h4 className="text-uppercase" style={{ color: 'Var(--mainOrange)' }}>{chief.chiefName}</h4>
              <p className="text-capitalize" style={{ color: 'Var(--mainOrange)' }}>{chief.chiefTitle}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Chief;
