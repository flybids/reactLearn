import React, { Component } from 'react';
import './static/css/index.scss'
import {connect} from 'react-redux' //connect 装饰器，优化代码

import {addNum,removeNum,removeNumAsync}  from './redux4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello Redux</h2>
        <h3>{this.props.xyz}</h3>
        <div className='Btn'>
          <input type='button' defaultValue='+' onClick={()=>{
            this.props.addNum()
          }}/>
          <input type='button' defaultValue='-' onClick={()=>{
            this.props.removeNum()
          }}/>
          <input type='button' defaultValue='异步-' onClick={()=>{
            this.props.removeNumAsync()
          }}/>
        </div>
      </div>
    );
  }
}
// 把state映射到props里面，把redux中reducer返回的新状态映射到react的props
const mapStateToProps = state =>{
  return {xyz:state}
}

// 把各种dipatch映射到props里面
const mapDispathToProps = {addNum,removeNum,removeNumAsync}


App = connect(mapStateToProps,mapDispathToProps)(App)
// function connect(){
//    return function (params) { 
//    }
// }
// connect()(App)

export default App;
