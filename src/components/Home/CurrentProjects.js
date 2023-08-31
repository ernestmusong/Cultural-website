import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Project from '../Projects/Project';

const CurrentProjects = () => {
  const { projects } = useSelector((store) => store.projects);
  const current = projects.filter((project) => project.current === true);
  return (
    <>
      <section className="latest-news mb-4">
        {current.map((project) => (
          <Project key={project.id} item={project} />
        ))}
      </section>

      <button type="button" className="home-btn">
        <Link to="/all-projects">See all projects</Link>
      </button>

    </>
  );
};

export default CurrentProjects;
