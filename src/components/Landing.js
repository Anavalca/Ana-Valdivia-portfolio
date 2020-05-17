import React from 'react';
import ProjectsList from '../components/ProjectList';
import projects from '../services/projects.json';

const Landing = (props) => {
  return (
    <main className='wrapperMain'>
        <section className='projectsContainer'>
          <ProjectsList data={projects}/>
        </section>
        {/* <section className='aboutContainer'></section> */}
    </main>
  )
}

export default Landing;