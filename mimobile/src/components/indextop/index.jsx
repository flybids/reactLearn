import React, { Component } from 'react'
import './css/index.scss'
export default class Head extends Component {
    state = {
        data: ''
    }
    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/name').then(res=>res.json()).then(data=>{
            if(data.status===200){
                this.setState({
                    data:data.name
                })
            }
        })
    }
    render() {
        return (
            <header className={'index_top'}>
                <div className={'logo'}>
                    <img src={require('./imgs/log.png')} alt='' />
                </div>
                <div className={'search'}>
                    <i className={'iconfont icon-sousuo'}></i>
                    <span>{this.state.data}</span>
                </div>
                <div className={'login iconfont icon-yonghu'}></div>
            </header>
        )
    }
}
