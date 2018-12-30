//根组件
import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css'; 
import {
  BrowserRouter as Router,
  Route,
  Link,NavLink,
  Switch

} from 'react-router-dom';
// Route 根据参数显示
import Head from './components/head/index'
import Home from './components/home/home'
import News from './components/news/news'
import NotFound from './components/404/index'
import NewsDetail from './components/newsDetail/details'

class App extends Component {
  render() {
    // 使根组件挂载不同的其他组件
    // get传值
    // 动态路由

    //localStorage
    return (
      <Router>
        <div>{
          //匹配不准
          //精准匹配根组件  exact
        }
          <hr/>
          <Link to={'/head'}>头</Link><br/>
          <NavLink to={'/'} activeClassName={'Active'}>首页</NavLink><br/>
          <NavLink to={'/news'} activeClassName={'Active'}>新闻</NavLink>
          <NavLink to={'/newsDetails'} activeClassName={'Active'}>新闻详情</NavLink>
          <hr/>
          {
            //switch 从上到下匹配，一旦匹配，即停止
          }
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/news' component={News}/>
              <Route path='/head' component={Head}/>
              <Route path='/newsDetails/:msg' component={NewsDetail}/>
              <Route path='/newsDetails' component={NewsDetail}/>
              <Route exact component={NotFound}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}


export default App;
