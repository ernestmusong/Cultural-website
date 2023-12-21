import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProjectDetails = ({ project }) => {
  const {
    id,
    amount,
    body,
    img,
    realised,
    url,
  } = project;
  const percentage = (realised / amount) * 100;
  if (!img) return null;
  return (
    <>
      <div className="container project-details">
        <div className="row">
          <div className="col-10 my-3 col-md-6 mx-auto">
            <img src={img} alt="project" className="img-fluid" />
          </div>
          {/* project text */}
          <div className="col-10 my-3 mx-auto  col-md-6  text-capitalize">
            <h1 style={{ color: 'Var(--heroWhite)' }}>
              {project.title}
              {' '}
            </h1>

            <p style={{ color: 'Var(--softWhite)' }}>{body}</p>
            <div className="d-flex gap-3">
              <div className="values">
                <p style={{ color: 'Var(--lightRed)' }}>
                  <strong className="text-uppercase">
                    Amount:
                    {' '}
                    {amount}
                    {' '}
                    <span>cfa</span>
                  </strong>
                </p>

                <p style={{ color: 'Var(--lightGreen)' }}>
                  <strong className="text-uppercase">
                    Realised:
                    {' '}
                    {realised}
                    {' '}
                    <span>cfa</span>
                  </strong>
                </p>
              </div>
              <div className="progress-container">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage.toFixed(0)}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: 'linear-gradient(to bottom, #307bbe, #379cf6)',
                    trailColor: '#e8e8e8',
                    textColor: '#e8e8e8',
                    textSize: '2rem',
                  })}
                />
              </div>
            </div>

            {/* buttons */}
            <div>
              <Link to="/all-projects">
                <button type="button" className="btns">back to projects</button>
              </Link>
              {project.status === 'open' ? (
                <Link to={url}>
                  <button type="button" className="btns" style={{ background: 'transparent', color: 'var(--mainYellow)' }}>
                    Contribute
                  </button>
                </Link>
              ) : (
                <button type="button" className="btns" disabled style={{ background: 'transparent', color: 'var(--mainYellow)', cursor: 'not-allowed' }}>
                  Closed!
                </button>
              )}
            </div>
            <div className="mt-3 text-warning">
              <Link to={id === 2 ? '/web-supporters' : '/contributors'} className="text-white text-capitalize my-4 text-decoration-underline ">
                {id === 2 ? 'see supporters' : 'see contributors'}
                {' '}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProjectDetails;
