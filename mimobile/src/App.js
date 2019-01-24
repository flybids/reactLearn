import React, { Component } from 'react';
// import Head from './components/indextop';
// import Banner from './components/banner';
// import Nav from './components/nav';
// import Recommend from './components/recommend';
// import Confern from './components/confern';
// import Goods from './components/phone';
 import Tabbar from './components/tabbar';
import Shop from './components/shop';
import Shopcurt from './components/shopcurt';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import My from './components/my'
import NotFound from './components/notfound';
import Map from './components/map';
// http://47.100.98.54:9020/api/name
// http://47.100.98.54:9020/api/buygoods/1

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path={'/'} component={Home}></Route>
          <Route path = {'/shopcurt'} component={Shopcurt}></Route>
          <Route path = {'/map'} component={Map}></Route>
          <Route path={'/my'} component={My}></Route>
          <Route path={'/shopbuy/:shopid'} component={Shop}></Route>
          <Route component={NotFound}></Route>
        </Switch>
          
          <Tabbar/>  
        </div>
      </Router>
    );
  }
}

export default App;
