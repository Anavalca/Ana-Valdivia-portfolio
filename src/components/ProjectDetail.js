import React from 'react';
import IconGithub from '../icons/github.png';

const ProjectDetails = (props) => {
  console.log(props)
  return (
    <div className="projectDetailPage">
      <div className='projectDetailContainer'>
      <div className='mockupProjectP'>
          <img alt='mockup' src={props.project.mockup}/>
        </div>
        <div className='infoProjectDetailContainer'>
          <p className='titleProject'>{props.project.name}</p>
          <ul className='tags'>
            {props.project.tags.map((tag, index) =>
              <span key={index}>
                {tag}
              </span>
            )}
          </ul>
          <p className='descriptionjProject'>{props.project.description}</p>
          <div className='linkContainer'>
            <button className='buttonShowWeb' title='Web Page' href={props.project.url}>Web</button>
            <a title='Github' href={props.project.githubUrl} target='blank'>
              <img className='iconGithub' alt='icon github' src={IconGithub} />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
export default ProjectDetails;