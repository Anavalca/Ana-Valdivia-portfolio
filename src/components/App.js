import React from 'react';
import '../stylesheets/App.scss';
import Landing from '../components/Landing';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
          
            <Landing/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
