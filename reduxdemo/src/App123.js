import React, { Component } from 'react';
import './static/css/index.scss'

class App extends Component {
  render() {
    const {store,addNum,rmNum,rmNumAsync} = this.props
    console.log(addNum)
    return (
      <div className="App">
        <h2>Hello Redux</h2>
        <h3>{store.getState()}</h3>
        <div className='Btn'>
          <input type='button' defaultValue='+' onClick={()=>{
            store.dispatch(addNum())
          }}/>
          <input type='button' defaultValue='-' onClick={()=>{
            store.dispatch(rmNum())
          }}/>
          <input type='button' defaultValue='异步-' onClick={()=>{
            store.dispatch(rmNumAsync())
          }}/>
        </div>
      </div>
    );
  }
}
//为了解决一层层的嵌套传值问题，使用react-redux

export default App;
