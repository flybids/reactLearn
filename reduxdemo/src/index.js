import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' //Provider 负责处理数据的组件
import App from './App';

import {createStore,applyMiddleware,compose} from 'redux'
import {reducer} from './redux4'
import thunk from 'redux-thunk'


const devToolsExtension = window.devToolsExtension?window.devToolsExtension():()=>{}
const store = createStore(reducer,compose(applyMiddleware(thunk),devToolsExtension))

ReactDOM.render( 
    <Provider store={store}>
        <App/> 
    </Provider>,
    document.getElementById('root')
);

