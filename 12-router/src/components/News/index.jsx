import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'

import Detail from '../Detail'

export default class News extends Component {
    render() {
        return (
            <div className='news'>
                <div className='menu'>
                 <ul>
                     <li>
                         <NavLink to={'/news/detail/Tom'}>北京条约</NavLink>
                     </li>
                 </ul>
                </div>
                <div className='detail'>
                  <Route exact path={'/news/detail/:name'} component={Detail}></Route>
                </div>
            </div>
        )
    }
}
