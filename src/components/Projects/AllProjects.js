import React from 'react'
import Comments from '../General/facebookComments';
import Project from './Project';
import Title4 from '../Headings/Title4';
import { useSelector } from 'react-redux';


const AllProjects = () => {
  const { projects } = useSelector((store) => store.projects);
  return(
    <>
    <div className="posts-container">
      {projects.map(project => (
        <Project key={project.id} project={project}/>
      ))}
 </div>
 <Title4 title='please leave your commments below' />
 <Comments />

 </>
  )
}

 
export default AllProjects;