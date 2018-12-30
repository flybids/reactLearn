import React, { Component } from 'react'
import Url from 'url'

export default class details extends Component {
  render() {
    const rs = Url.parse(this.props.location.search,true)
    return (
      <div>
        <h3>我是新闻详情页啊{this.props.match.params.msg}</h3>

        <h2>{rs.query.id}</h2>
      </div>
    )
  }
}
