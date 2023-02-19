import React from 'react'
import { Link } from 'react-router-dom';
  import {projects} from '../../db.json'
import Comments from '../General/facebookComments';
import Title4 from '../Headings/Title4';


const AllProjects = () => {
  return(
    <>
    <div className="posts-container">
      {projects.map(project => (
        <Project key={project.id} {...project}/>
      ))}
 </div>
 <Title4 title='please leave your commments below' />
 <Comments />

 </>
  )
}
const Project=({id, title, desc,img, url}) => {
    return (
        <div className="post-container">
         
        <img className="image" src={require('../../Images/projectImages/'+img)} alt="project" />
        <h4 className="heading text-capitalize">{title}</h4> 
        <p>{desc}</p>
        <div className='post-footer'>      
          <Link to={`/projects/${id}`}>Read more</Link>
          <Link to={url}>Contribute</Link>
        </div>
      </div>
        
        
    )
}

 

 
export default AllProjects;