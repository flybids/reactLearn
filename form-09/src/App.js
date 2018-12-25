//根组件
import React, { Component } from 'react';

class App extends Component {
  state = {
    val : '',
    name : '',
    sex : '0',
    city : '',
    cityList :['上海','北京','南京']
  }
   handleChange = (e) =>{
    console.log(e.target.value)
    this.setState({
      val:e.target.value
    })
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)
  }
  handleSex = (e) =>{
    this.setState({
      sex:e.target.value
    })
  }
  handleSelect =(e)=>{
    this.setState({
      city:e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>FORM</h1>
        {
          //非受控表单控件
        }
        <input type='text' placeholder='输入内容'/>
        {
          //受控表单控件,类似vue数据的绑定
          //可以监视表单数据的变动
        }
        <input type='text' value={this.state.val} onChange={this.handleChange}/>
        <b>{btoa(encodeURI(this.state.val))}</b>
        <br/>
        <form action='https://www.baidu.com' onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleName} placeholder='用户名'/>
          <input type='radio' value={'0'} checked={this.state.sex==='0'} onChange={this.handleSex}/>男
          <input type='radio' value={'1'} checked={this.state.sex==='1'} onChange={this.handleSex}/>女
          {
            this.state.cityList.length>0&&(
              <select value={this.state.city} onChange={this.handleSelect}>
                {
                  this.state.cityList.map((item,index)=>{
                    return <option key={index}>{item}</option>
                  })
                }
              </select>
            )
          }
          
          <input type='submit' value={'提交'}/>
        </form>
      </div>
    );
  }
}

export default App;
