import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './redux1'

// import {
//     createStore
// } from 'redux'
// import {
//     reducer,
//     addNum,
//     removeNum
// } from './redux2'

//浏览器console devToolsExtension存在，则支持使用compose监听redux
import {createStore,applyMiddleware,compose} from 'redux'
import {reducer,addNum,removeNum,removeNumAsync} from './redux3'
//允许redux做异步操作 yarn add redux-thunk
import thunk from 'redux-thunk'


const devToolsExtension = window.devToolsExtension?window.devToolsExtension():()=>{}
const store = createStore(reducer,compose(applyMiddleware(thunk),devToolsExtension))

//const store = createStore(reducer)


render()
function render() {
    ReactDOM.render( 
        <App 
        store = {store}
        addNum = {addNum}
        rmNum = {removeNum}
        rmNumAsync = {removeNumAsync}
        /> ,
        document.getElementById('root')
    );
}
store.subscribe(render)

//中间件 脚手架 集成项目开发环境，无需自己进行各种配置 middleware


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();