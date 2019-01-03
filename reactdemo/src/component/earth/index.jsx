import React, { Component } from 'react'
import Echarts from 'echarts'
import 'echarts-gl';
import {option} from './option'
export default class Earth3d extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = Echarts.init(document.getElementById('main'));
        
        myChart.setOption(option);

    }
    render() {
        return (
            <div className={'container'} id={'main'}></div>
        )
    }
}
