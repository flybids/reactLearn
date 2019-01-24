import React, { Component } from 'react'
import './css/index.scss'
export default class Recommend extends Component {
    render() {
        return (
            <div className={'recommend'}>
                <img src={require('./img/1.webp')}/>
            </div>
        )
    }
}
