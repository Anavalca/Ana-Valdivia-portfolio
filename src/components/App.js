import React from 'react';
import '../stylesheets/App.scss';
// import Computer from '../components/Computer';
import Main from './Main';
import ProjectSection from './ProjectSection';
import projects from '../services/projects.json';
import About from './About';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.renderCharacterDetail = this.renderCharacterDetail.bind(this);

    this.state = {

    }
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            {/* <div className='filter'></div> */}
            {/* <Computer/> */}
            <Main/>
            <ProjectSection id='ProjectSection'data={projects} />
            <About/>
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
