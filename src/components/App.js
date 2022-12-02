import React from 'react';
import '../stylesheets/App.scss';
import Home from './Home';
import ProjectDetails from './ProjectDetail';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );

}

export default App;