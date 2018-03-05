import React, { Component } from 'react';
import { Route, HashRouter, Redirect} from "react-router-dom";
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import ImagePreloader from './components/ImagePreloader/ImagePreloader';
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
          <ImagePreloader/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
