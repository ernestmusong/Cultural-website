import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProjectDetails from './ProjectDetails';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects } = useSelector((store) => store.projects);
  const project = projects.find((project) => project.id === Number(id));
  console.log(project);

  return (

    <>
      <ProjectDetails project={project} />
    </>

  );
};
export default ProjectDetailsPage;
