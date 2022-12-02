import React from 'react';
import Main from './Main';
import ProjectSection from './ProjectSection';
import About from './About';

const Home = () => {
  return (
    <React.Fragment>
      <Main />
      <ProjectSection />
      <About />
    </React.Fragment>
  )
}

export default Home;