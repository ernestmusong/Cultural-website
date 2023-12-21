import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';
import Title4 from '../Headings/Title4';

const AllProjects = () => {
  const { projects } = useSelector((store) => store.projects);
  return (
    <>
      <div className="posts-container">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <Title4 title="please leave your commments below" />
    </>
  );
};

export default AllProjects;
