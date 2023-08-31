import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <div className="post-container">

    <img className="image" src={project.img} alt="project" />
    <h4 className="heading text-capitalize">{project.title}</h4>
    <p>{project.desc}</p>
    <div className="post-footer">
      <Link to={`/projects/${project.id}`}>Read more</Link>
      <Link to={project.url}>Contribute</Link>
    </div>
  </div>

);

Project.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Project;
