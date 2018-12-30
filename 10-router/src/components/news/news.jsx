import React, { Component } from 'react'

import {NavLink,Route} from 'react-router-dom'
import NewsDetail from '../newsDetail/details'

//import routes from '../../router/index'


export default class news extends Component {
state = {
    num:5
}
  render() {
    const localPath = this.props.match.path
    return (
      <div className="news">
        <div className="newsTitle">
            <ul>
                <li><NavLink to={`${localPath}/newsDetails/111`}>新闻 一</NavLink></li>
                <li><NavLink to={'/news/newsDetails?id=111'}>News Two</NavLink></li>
            </ul>
        </div>
        <div className="newsDetails">
            <Route exact path='/news/newsDetails/:msg' component={NewsDetail}/> */}
            {            
                //<Route exact path='/news/newsDetails' component={NewsDetail}/>
            }   
             <Route exact path={`${localPath}/newsDetails`} component={NewsDetail}/>     
            {
            //    routes.map((item,index)=>{
            //     return (
            //         <Route exact path='/news/newsDetails/:msg' component={NewsDetail}/> 
            //     )
            //    }) 
            }
        </div>
        
      </div>
    )
  }
}
