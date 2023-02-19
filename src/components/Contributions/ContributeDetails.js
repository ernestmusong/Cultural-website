import React from 'react'
import TreasurerDetails from '../Contributions/TreasurerDetails';

  const ContributeDetails = (props) => {
     
    // const[project, setProject] = useState({})
    // const [projectId, setProjectId] = useState('')
    // useEffect(() =>{
    //     const projectId = props.match.params.id;
    //     const project = allProjects.projects.find(item => item.id === projectId)
    //     setProject(project)
    //     setProjectId(projectId)
    //     }
        
    //     , [project, props.match.params.id])
    return ( 
        
          <>
          <TreasurerDetails {...props} />
          </>
        
     );
}
 export default ContributeDetails;