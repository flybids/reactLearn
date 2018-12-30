//根组件
import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css'; 
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch

} from 'react-router-dom';
// Route 根据参数显示
//import Head from './components/head/index'
//import Home from './components/home/home'
//import News from './components/news/news'
//import NotFound from './components/404/index'

import routes from './router/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>{
          //匹配不准
          //精准匹配根组件  exact
        }
         <div className={'Top'}>
              <NavLink to={'/'} activeClassName={'Active'}>首页</NavLink>
              <NavLink to={'/news'} activeClassName={'Active'}>新闻</NavLink>
              <NavLink to={'/user'} activeClassName={'Active'}>用户中心</NavLink>
          </div>
          {
            //switch 从上到下匹配，一旦匹配，即停止
          }
          <div className={'Content'}>
              <Switch>
                  {
                    routes.map((item,index)=>{
                      // <Route key={index} path={item.path} component={item.component}/>
                      return (
                       <Route key={index} {...item}/>
                      )
                    })
                  }
                  {/* <Route exact path='/' component={Home}/> */}
                  {/* <Route path='/news' component={News}/>
                  <Route path='/user' component={Head}/> */}
                  {/* <Route exact component={NotFound}/> */}
              </Switch>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
