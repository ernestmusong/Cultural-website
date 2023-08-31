import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Comments from '../General/facebookComments';
import Title4 from '../Headings/Title4';

const ProjectDetails = ({ project }) => (
  <>
    <div className="container project-details">
      <div className="row">
        <div className="col-10 my-3 col-md-6 mx-auto">
          <img src={project.img} alt="project" className="img-fluid" />
        </div>
        {/* project text */}
        <div className="col-10 my-3 mx-auto  col-md-6  text-capitalize">
          <h1 style={{ color: 'Var(--heroWhite)' }}>
            {project.title}
            {' '}
          </h1>

          <p style={{ color: 'Var(--softWhite)' }}>{project.body}</p>

          <p style={{ color: 'Var(--lightRed)' }}>
            <strong className="text-uppercase">
              Amount:
              {' '}
              {project.amount}
              {' '}
              <span>cfa</span>
            </strong>
          </p>

          <p style={{ color: 'Var(--lightGreen)' }}>
            <strong className="text-uppercase">
              Realised:
              {' '}
              {project.realised}
              {' '}
              <span>cfa</span>
            </strong>
          </p>

          {/* buttons */}
          <div>
            <Link to="/all-projects">
              <button type="button" className="btns">back to projects</button>
            </Link>
            {project.status === 'open' ? (
              <Link to={project.url}>
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
            <Link to={project.id === 2 ? '/web-supporters' : '/contributors'} className="text-white text-capitalize my-4">
              {project.id === 2 ? 'see supporters' : 'see contributors'}
              {' '}
            </Link>
          </div>

        </div>
      </div>
    </div>
    <Title4 title="please leave your commments below" />
    <Comments />
  </>
);

ProjectDetails.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProjectDetails;
