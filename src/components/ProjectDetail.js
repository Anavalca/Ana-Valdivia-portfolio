import React from 'react';
import IconGithub from '../icons/github.png';
import IconWebsite from '../icons/web2.png';
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {

  const goPrevProjectDetail = () => {
    if (props.project.id > 1) {
      return `/project/${props.project.id - 1}`;
    }
  }

  const goNextProjectDetail = () => {
    if (props.project.id < 6) {

      return `/project/${props.project.id + 1}`;
    }
  }

  const { mockup, name, id, tags, description, description2, url, githubUrl } = props.project;
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
            { githubUrl && (
            <a className='buttonGithub' title='Github' href={githubUrl} target='blank'>
              <img className='iconGithub' alt='icon github' src={IconGithub} />
              <span className='titleVisitGithub'>Github repository</span>
            </a>
            )}
          </div>
        </div>
      </div>
      <div className='panelNavigation'>
        <Link to={goPrevProjectDetail} >
          <i className={`fas fa-chevron-left ${id === 1 ? 'hidden' : ''}`}></i>
          <span className={`prev ${id === 1 ? 'hidden' : ''}`}>previous project</span>
        </Link>
        <Link to='/'>
          <span className='iconHome'>Home</span>
        </Link>
        <Link to={goNextProjectDetail}>
          <span className={`next ${id === 6 ? 'hidden' : ''}`}>next project</span>
          <i className={`fas fa-chevron-right ${id === 6 ? 'hidden' : ''}`}></i>
        </Link>
      </div>
    </div >
  )
}

export default ProjectDetails;