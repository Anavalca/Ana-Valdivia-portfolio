import React from 'react';
import '../stylesheets/App.scss';
// import Computer from '../components/Computer';
import Main from './Main';
import ProjectSection2 from './ProjectSection';
import projects from '../services/projects.json';
import About from './About';
import ProjectDetails from './ProjectDetail';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderProjectDetail = this.renderProjectDetail.bind(this);

    this.state = {

    }
  }

  renderProjectDetail(props) {
    const routeId = props.match.params.id;
    // const characters = projects;
    for (let projectObj of projects) {
      if (projectObj.id === parseInt(routeId)) {
        return <ProjectDetails project={projectObj} />;

      }
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
            <ProjectSection2 id='ProjectSection'data={projects} />
            <About/>
          </Route>
          <Route path="/project/:id" render={this.renderProjectDetail} />
        </Switch>
      </div>
    );
  }
}


export default App;
