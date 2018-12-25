import React, { Component } from 'react'
import { DatePicker,Button,Icon,Row, Col  } from 'antd';
import 'antd/dist/antd.css';

export default class AntDesign extends Component {
  render() {
    return (
      <div>
        <DatePicker/> 
        <Button>default</Button>
        <Button type="danger" shape="circle" icon="search" />
        <Button type="primary" >primary</Button>
        <Icon type="step-backward" />
        <Icon type="plus-circle" theme="twoTone" />
        <br/>
        <hr/>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>

      </div>
    )
  }
}
