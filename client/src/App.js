import React, {Component} from 'react';

import './App.css';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LandingComponent from './Components/LandingComponent/LandingComponent';
import ProjectCarouselComponent from './Components/ProjectComponent/ProjectCarouselComponent';


class App extends Component {
  render() {
    return (
      <div>
        <NavBarComponent />
        <div className="App">
          <LandingComponent />
          <ProjectCarouselComponent />
        </div>
      </div>
    );
  }
}

export default App;
