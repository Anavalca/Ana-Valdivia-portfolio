import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';

const ProjectSection = (props) => {
  return (
    <section className='projectsContainer'>
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
        {props.data.map((projectObject) =>
        <Link key={projectObject.id} to={`/project/${projectObject.id}`}>
          <li className="projectLi" key={projectObject.id} id={`card_${projectObject.id}`}>
            <Project
              id={projectObject.id}
              name={projectObject.name}
              title={projectObject.title}
              description={projectObject.description}
              img={projectObject.img}
              tags={projectObject.tags}
              url={projectObject.url}
              githubUrl={projectObject.githubUrl}
            />
          </li>
          </Link>
        )}
      </div>
    </section>
  )
}

export default ProjectSection;