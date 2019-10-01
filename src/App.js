import 'normalize.css';
import './assets/scss/style.scss';
import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Skill from './containers/Skill';
import Experience from './containers/Experience';
import Portfolio from './containers/Portfolio';
import ReactGA from 'react-ga';

class App extends Component {

  componentDidMount() {
    ReactGA.initialize('UA-149166160-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/skill' component={Skill} />
          <Route path='/experience' component={Experience} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
