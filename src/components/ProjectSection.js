import React from 'react';
import Project from './Project';

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
      <ul className="listProject">
        {props.data.map((projectObject) =>
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
        )}
      </ul>
    </section>
  )
}

export default ProjectSection;