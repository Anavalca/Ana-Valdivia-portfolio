import React from 'react';
import ProjectsList from '../components/ProjectList';
import projects from '../services/projects.json';

const Landing = (props) => {
  return (
    <main className='wrapperMain'>
        <section className='projectsContainer'>
          <h1 className='titleSection'>Projects</h1>
          <ProjectsList data={projects}/>
        </section>
        <section className='aboutContainer'></section>
    </main>
  )
}

export default Landing;