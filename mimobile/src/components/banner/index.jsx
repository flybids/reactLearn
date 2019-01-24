import React, { Component } from 'react'
import Swiper from 'swiper'
import {Link} from 'react-router-dom'
import './css/index.scss'
import "swiper/dist/css/swiper.min.css"
//http://47.100.98.54:9020/api/name

export default class Banner extends Component {
    state = {
        data :[]
    }
    play(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop : true,
            pagination: {
                el: '.swiper-pagination',
              },
        });
    }
    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/banner').then(res=>res.json()).then(data=>{
            data.status===200&&this.setState({
                data:data.data
            })
            this.play()
        })
    }
    render() {
        return (
            <div className={'banner swiper-container'}>
                <ul className={'swiper-wrapper'}>
                {
                    this.state.data.map((item,index)=>{
                        return (
                            <li className={'swiper-slide'} key={item.id}>
                                <Link to={`/shopbuy/${item.shopid}`}><img src={item.picurl} alt={item.alt}/></Link>
                            </li>    
                        )
                    })
                }
                    {/* <li className={'swiper-slide'}><a href=""><img src={require('./img/1.webp')} alt=""/></a></li>
                    <li className={'swiper-slide'}><a href=""><img src={require('./img/2.webp')} alt=""/></a></li>
                    <li className={'swiper-slide'}><a href=""><img src={require('./img/3.webp')} alt=""/></a></li> */}
                </ul>
                <div className={"swiper-pagination"}></div>
            </div>
        )
    }
}
