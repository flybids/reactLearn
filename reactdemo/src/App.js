import React, { Component } from 'react';
import './static/css/index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Page from './component/layout'


class App extends Component {
  render() {
    return (
	  <Router basename='reactDemo'>
		  <Page/>
	  </Router>	
    );
  }
}
export default App;
