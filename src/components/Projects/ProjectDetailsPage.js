import React from 'react';
import { useParams } from 'react-router';
import { UseSelector } from 'react-redux';
import ProjectDetails from './ProjectDetails';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects } = UseSelector((store) => store.projects);
  const project = projects.find((project) => project.id.toString() === id.toString());

  return (

    <>
      <ProjectDetails project={project} />
    </>

  );
};
export default ProjectDetailsPage;
