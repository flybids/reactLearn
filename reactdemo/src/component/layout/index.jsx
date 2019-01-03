import React, { Component } from 'react'
import {Route,NavLink,Switch,Link} from 'react-router-dom'
import Home from '../home/index'
import Zhexian from '../zhexian'
import NotFound from '../404'
import Zhu from '../zhuzi'
import Earth3d from '../earth';
import Relation from '../relation'
import BMap from '../bmap'



export default class componentName extends Component {
    render() {
        return (
            <div className={'router'}>
            <div className={'menu'}>
                 <div className={'logo'}>
                    <img src={require('../../static/imgs/logo.svg')} width={'100%'} height={'100%'} alt='logo'/>
                </div>
                <div className={'side_nav'}>
                   <ul>
                       <li><NavLink exact to='/'>首页</NavLink></li>
                       <li><NavLink exact to='/zhexian'>折线图</NavLink></li>
                       <li><NavLink exact to='/zhu'>柱状图</NavLink></li>
                       <li><NavLink exact to='/3dearth'>3D地球</NavLink></li>
                       <li><NavLink exact to='/relation'>关系图</NavLink></li>
                       <li><NavLink exact to='/bmap'>百度地图</NavLink></li>
                   </ul>
                </div>
            </div>
            <div className={'content'}>
                <div className = {'con_top_nav'}>
                    <ul>
                        <li><Link to="/relation" className={'active'}>React</Link></li>
                        <li><Link to="/zhexian" className={'iconfont icon-ice-cream'}></Link></li>
                        <li><Link to="/zhu" className={'iconfont icon-cherry'}></Link></li>
                        <li><Link to="/3dearth" className={'iconfont icon-satellite-dish'}></Link></li>
                        <li><Link to="/bmap" className={'iconfont icon-eBook'}></Link></li>
                    </ul>
                </div>
               <div className={'show_con'}>
                 <Switch>
                   <Route exact path={'/'} component={Home}/>
                   <Route  path={'/zhexian'} component={Zhexian}/>
                   <Route exact path={'/zhu'} component={Zhu}/>
                   <Route exact path={'/3dearth'} component={Earth3d}/>
                   <Route exact path={'/relation'} component={Relation}/>
                   <Route exact path={'/bmap'} component={BMap}/>
                   <Route component={NotFound}/>
                 </Switch>
                   
   
                    {/* <div className={'container'} id={'main'}></div> */}
               </div>
                
            </div>
         </div>
        )
    }
}
