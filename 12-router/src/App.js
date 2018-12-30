import React, { Component } from 'react'
import {BrowserRouter as Router,NavLink,Route,Switch} from 'react-router-dom'

// import Home from './components/Home'
// import News from './components/News'
// import User from './components/User'
// import NotFound from './components/404'
import routers from './router/inndex'

import "./static/fonts/iconfont.css"

export default class componentName extends Component {
  state={
    arr:[]
  }
  getData = () =>{
    const arr = [
      {
        exact:true,
        activeClassName:'checked',
        to:'/',
        con:'Home',
      },
      {
        activeClassName:'checked',
        to:'/news',
        con:'News',
      },
      {
        activeClassName:'checked',
        to:'/user',
        con:'User'
      }
    ]
    this.setState({arr})
  }
  componentDidMount(){
    this.getData()
  }
  render() {
    return (
      <Router>
        <div className='body'> 
          <div className={'title'}><i className="iconfont icon-houzi"></i> Hi React<i className="iconfont icon-feidie"></i></div>
          <div className={'head'}>
            {
              this.state.arr.length>0&&this.state.arr.map((item,index)=>{
                return (
                  <NavLink {...item} key={index}>{item.con}</NavLink>
                )
              })
            }
          </div>
          <div className='con'>
          <Switch>
            {
              routers.map((item,index)=>{
                return (
                  <Route {...item} key={index}/>
                )
              })
            }
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

