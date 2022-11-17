import React from 'react';
import Project2 from './Project2';
import { Link } from 'react-router-dom';
import projects from '../services/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'


const ProjectSection = () => {
  return (
    <section className='projectsContainer' id='ProjectSection' >
      <div className='titleSectionContainer'>
        <div className='decorationTitle1'></div>
        <div className='titleProjects'>
          Projects
        </div>
        <div className='decorationTitle2'></div>
      </div>
      <div className="listProject">
        {projects.map((project) =>
          <Link key={project.id} to={`/project/${project.id}`}>
            <li className="projectLi" key={project.id} id={`card_${project.id}`}>
              <Project2
                id={project.id}
                name={project.name}
                title={project.title}
                description={project.description}
                mockup={project.mockup}
                tags={project.tags}
                url={project.url}
                githubUrl={project.githubUrl}
              />
            </li>
          </Link>
        )}
      </div>
      <a title='go to github profile' href='https://github.com/Anavalca' target='blank' className='morePorjectButton'> 
      <FontAwesomeIcon icon={faPlus} className="plusIcon" />
        See more projects
      </a>
    </section>
  )
}

export default ProjectSection;