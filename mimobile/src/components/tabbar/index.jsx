import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './css/index.scss'

@connect(state=>({shop:state}),{})
    

class Tabbar extends Component {

    render() {
        let num = this.props.shop.carCount.data
        console.log('总数',num);
        return (
            <div className={'tabbar'}>
                <ul>
                    <li className={'active'}>
                        <Link to={'/'}>
                            <i className={'iconfont icon-shouye'}></i>
                            <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/map'}>
                            <i className={'iconfont icon-caidan'}></i>
                            <span>地图</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/shopcurt'}>
                            <i className={'iconfont icon-gouwuche'}><em>{num}</em></i>
                            <span>购物车</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/my'}>
                            <i className={'iconfont icon-ziyuan'}></i>
                            <span>我的</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default  Tabbar