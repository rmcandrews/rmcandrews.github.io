import React, { Component } from 'react';
import { Route, HashRouter, Redirect} from "react-router-dom";
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import Resume from './scenes/Resume/Resume';
import Projects from './scenes/Projects/Projects';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navigation/>
          <div>
            <Route exact path="/" render={() => <Redirect to="/resume"/>} />
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
