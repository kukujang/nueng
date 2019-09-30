import 'normalize.css';
import './assets/scss/style.scss';
import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import Skill from './containers/Skill';
import Experience from './containers/Experience';
import Portfolio from './containers/Portfolio';

class App extends Component {

  renderRouter(){
    return(
      <Switch>
        <Route path='/skill' component={Skill} />
        <Route path='/experience' component={Experience} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/' component={Home} />
      </Switch>
    )
  }

  render() {
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
