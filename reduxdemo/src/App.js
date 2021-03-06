import React, { Component } from 'react';
import './static/css/index.scss'

//以下三行代码，凡是组件中要用到sredux，都在组件中使用者三行代码
import {connect} from 'react-redux' //connect 装饰器，优化代码
import {addNum,removeNum,removeNumAsync}  from './redux4'
//装饰器写法,此时需要重新编译
@connect(state=>({xyz:state}),{addNum,removeNum,removeNumAsync})

// const mapStateToProps = state =>{
//   return {xyz:state}
// }
// // 把各种dipatch映射到props里面
// const mapDispathToProps = {addNum,removeNum,removeNumAsync}
// App = connect(mapStateToProps,mapDispathToProps)(App)



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
// const mapStateToProps = state =>{
//   return {xyz:state}
// }

// // 把各种dipatch映射到props里面
// const mapDispathToProps = {addNum,removeNum,removeNumAsync}


// App = connect(mapStateToProps,mapDispathToProps)(App)
// function connect(){
//    return function (params) { 
//    }
// }
// connect()(App)

export default App;
