//入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//脚手架基于webpack高度封闭，所以才能编译 css,less，scss
//脚手架引入模块可以不带后缀
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 