import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
import projects from '../services/projects.json';

const ProjectSection = () => {
  return (
    <section className='projectsContainer' id='ProjectSection' >
      <div className='titleSectionContainer'>
        <div className='decorationTitle1'></div>
        <div className='titleProjects'>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </div>
        <div className='decorationTitle2'></div>
      </div>
      <div className="listProject">
        {projects.map((project) =>
          <Link key={project.id} to={`/project/${project.id}`}>
            <li className="projectLi" key={project.id} id={`card_${project.id}`}>
              <Project
                id={project.id}
                name={project.name}
                title={project.title}
                description={project.description}
                img={project.img}
                tags={project.tags}
                url={project.url}
                githubUrl={project.githubUrl}
              />
            </li>
          </Link>
        )}
      </div>
    </section>
  )
}

export default ProjectSection;