import React, { Component } from 'react'

import {Redirect,NavLink} from 'react-router-dom'

export default class news extends Component {
state = {
    num:5
}
getData = ()=>{
    setTimeout(()=>{
        this.setState({
            num:1
        })
    },3000)
    
}
componentDidMount (){
    this.getData()
}
componentWillUnmount(){
    this.setState = () =>{
        return false;
    }
}

  render() {
    return (
      <div>
        <h2>NEWS</h2>
        {
            //组件卸载之前，可以更新状态，卸载后无法更新状态
            //否则会报错
            //

            // this.state.num==1&&(
            //     <Redirect to={"/home"}/>
            // )
        }
        <ul>
            <li><NavLink to={'/newsDetails/111'}>列表1</NavLink></li>
            {
                //安装cnpm i -S url
            }
            <li><NavLink to={'/newsDetails?id=111'}>?列表1</NavLink></li>
        </ul>
      </div>
    )
  }
}
