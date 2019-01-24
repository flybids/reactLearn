import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import './css/index.scss'
export default class Confern extends Component {
    render() {
        return (
            <div className={'confern'}>
                <a href='/'>
                    <img src={require('./img/1.webp')} alt="" />
                </a>
            </div>
        )
    }
} 
