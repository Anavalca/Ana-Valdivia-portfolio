import React from 'react';
import GithubIcon from '../icons/git.png';
import WebsiteIcon from '../icons/web2.png';
import projects from '../services/projects.json';
import { Link, useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const goPrevProjectDetail = projectId > 1 ? `/project/${parseInt(projectId) - 1}` : ''
  const goNextProjectDetail = projectId < 4 ? `/project/${parseInt(projectId) + 1}` : ''

  const { mockup, name, id, tags, description, description2, url, githubUrl } = projects[projectId - 1];
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
              <img className='iconWebsite' alt='website icon' src={WebsiteIcon} />
            </a>
            {githubUrl && (
              <a className='buttonGithub' title='Github' href={githubUrl} target='blank'>
                <img className='iconGithub' alt='github icon' src={GithubIcon} />
                <span className='titleVisitGithub'>Github repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='panelNavigation'>
        <Link to={goPrevProjectDetail} >
          <i className={`fas fa-chevron-left ${id === 1 ? 'hidden' : ''}`}></i>
          <span className={`prev ${id === 1 ? 'disabled' : ''}`}>previous project</span>
        </Link>
        <Link to='/'>
          <span className='iconHome'>Home</span>
        </Link>
        <Link to={goNextProjectDetail}>
          <span className={`next ${id === 4 ? 'disabled' : ''}`}>next project</span>
          <i className={`fas fa-chevron-right ${id === 4 ? 'hidden' : ''}`}></i>
        </Link>
      </div>
    </div >
  )
}

export default ProjectDetails;