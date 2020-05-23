import React from 'react';
import IconGithub from '../icons/github.png';
import IconWebsite from '../icons/web.png';
import { Link } from 'react-router-dom';

const ProjectDetails = (props) => {

  const goPrevProjectDetail = () => {
    if (props.project.id > 1) {
      return `/project/${props.project.id - 1}`
    }
  }

  const goNextProjectDetail = () => {
    if (props.project.id < 6) {
      return `/project/${props.project.id + 1}`
    }
  }

  return (
    <div className="projectDetailPage">
      <div className='projectDetailContainer'>
        <div className='mockupProjectP'>
          <img alt='mockup' src={props.project.mockup} />
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
          <p className='descriptionjProject titleDescription'>{props.project.description}</p>
          <p className='descriptionjProject'>{props.project.description2}</p>
          <div className='linkContainer'>
            <a className='buttonShowWeb' title='Website' href={props.project.url} target='blank'>
              <span className='titleVisitWeb'>Visit website</span>
              <img className='iconWebsite' alt='icon website' src={IconWebsite} />
            </a>
            <a className='buttonGithub' title='Github' href={props.project.githubUrl} target='blank'>
              <img className='iconGithub' alt='icon github' src={IconGithub} />
              <span className='titleVisitGithub'>Github repository</span>
            </a>
          </div>
        </div>
      </div>
      <div className='panelNavigation'>
        <Link to={goPrevProjectDetail}>
          <i className="fas fa-chevron-left"></i>
          <span className='prev'>previous project</span>
        </Link>
        <Link to='/'>
          <span className='iconHome'>Home</span>
        </Link>
        <Link to={goNextProjectDetail}>
        <span className='next'>next project</span>
        <i className="fas fa-chevron-right"></i>
        </Link>
    </div>
    </div >
  )
}
export default ProjectDetails;