import React from 'react';
import '../stylesheets/App.scss';
// import Computer from '../components/Computer';
import ProjectSection from './ProjectSection';
import projects from '../services/projects.json';
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
            <main className='wrapperMain'>
              <div className='titleContainer'>
                <div className='keyboard'>
                  <div className='h'>
                    <span>H</span>
                  </div>
                  <div className='e'>
                    <span>E</span>
                  </div>
                  <div className='l'>
                    <span>L</span>
                  </div>
                  <div className='l2'>
                    <span>L</span>
                  </div>
                  <div className='o'>
                    <span>O</span>
                  </div>
                </div>
                <div className='subtitle'> I´m Ana Valdivia. Frontend Developer</div>
              </div>
              <span class="scroll-btn">
                {/* <a href="#"> */}
                  <span class="mouse">
                    <span>
                    </span>
                  </span>
                {/* </a> */}
                <p>scroll me</p>
              </span>
            </main>
            <ProjectSection data={projects} />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
