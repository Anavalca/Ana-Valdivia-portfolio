import React from 'react';
import Project from './Project';

const ProjectSection = (props) => {
  return (
    <section className='projectsContainer'>
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