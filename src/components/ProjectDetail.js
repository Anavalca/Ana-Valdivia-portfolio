// import React from 'react';
// // import GithubIcon from '../icons/github.png';
// import WebsiteIcon from '../icons/web2.png';
// import projects from '../services/projects.json';
// import { Link, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import IconGithub from '../icons/github.png';
import IconWebsite from '../icons/web2.png';
import { Link, useParams } from 'react-router-dom';
import projects from '../services/projects.json';


const ProjectDetails = () => {
  const parameterId = useParams()
  const projectId = parseInt(parameterId.id)

  const goPrevProjectDetail = projectId > 1 ? `/project/${projectId - 1}` : ''
  const goNextProjectDetail = projectId < 4 ? `/project/${projectId + 1}` : ''

  const project = projects.find(element => element.id === projectId)
  const { mockup, name, id, tags, description, description2, url, githubUrl } = project;
  return (
    <div className="projectDetailPage">
      <div className='projectDetailContainer'>
        <img className='mockupProject' alt='mockup' src={mockup} />
        <div className='infoProjectDetailContainer'>
          <p className='titleProject'>{name}</p>
          <ul className='tags'>
            {tags.map((tag, index) =>
              <span key={index}>
                {tag}
              </span>
            )}
          </ul>
          <p className='descriptionjProject titleDescription'>{description}</p>
          <p className='descriptionjProject'>{description2}</p>
          <div className='linkContainer'>
            <a className='buttonShowWeb' title='Website' href={url} target='blank'>
              <span className='titleVisitWeb'>Visit website</span>
              <img className='iconWebsite' alt='icon website' src={IconWebsite} />
            </a>
            {githubUrl && (
              <a className='buttonGithub' title='Github' href={githubUrl} target='blank'>
                {/* <FontAwesomeIcon className='iconGithub' alt='github icon' icon={faGithub} /> */}
                <img className='iconGithub' alt='icon github' src={IconGithub} />
                <span className='titleVisitGithub'>Github repository</span>
              </a>
            )}

          </div>
        </div>
      </div >
      <div className='panelNavigation'>
        <Link to={goPrevProjectDetail} >
          {id > 1 && (
            <i className="fas fa-chevron-left"></i>
          )}
          <span className={`prev ${id === 1 ? 'disabled ' : ''}`}>previous project</span>
        </Link>
        <Link to='/'>
          <span className='iconHome'>Home</span>
        </Link>
        <Link to={goNextProjectDetail}>
          <span className={`next ${id === 4 ? 'disabled' : ''}`}>next project</span>
          {id < 4 && (
            <i className="fas fa-chevron-right"></i>
          )}
        </Link>
      </div>
    </div >
  )
}
export default ProjectDetails;