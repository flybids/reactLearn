import React, {
  Component
} from 'react';
import Head from './components/header/index'
import Footer from './components/footer/index'
import Info from './components/info/index'
import Main from './components/main/index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
          name: '大锤',
          id: Math.random(),
        },
        {
          name: '小米',
          id: Math.random(),
        },
        {
          name: '大四',
          id: Math.random(),
        },
      ]
    }
  }
  handleOutputItem = (e) => {
    let {
      target,
      keyCode
    } = e
    if (keyCode === 13) {
      console.log(target.value, keyCode);
      this.setState({
        list: this.state.list.concat([{
          name: target.value,
          id: Math.random()
        }])
      })
      target.value = null
    }
  }
  handleRemove = (index) => {
    let data = this.state.list
    data.splice(index, 1)
    this.setState({
      list: data
    })
    console.log('rm')
  }
  render() {
    return ( <
      div className = "App" >
      <
      section className = "todoapp" >
      <
      Head keydown = {
        this.handleOutputItem
      }
      /> {
        this.state.list.length > 0 && ( <
          Main data = {
            this.state.list
          }
          rmFn = {
            this.handleRemove
          }
          />
        )
      } <
      Footer / >
      <
      /section> <
      Info / >
      <
      /div>
    )
  }
}

export default App;