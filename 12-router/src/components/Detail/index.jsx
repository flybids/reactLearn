import React, { Component } from 'react'


export default class Detail extends Component {
    render() {
        return (
            <div>
                <h3>新闻详</h3>
                <i>{this.props.match.params.name}</i>
            </div>
        )
    }
}
/*
可以用来对父组件传给子组件的props的数据格式进行限制,类型检查
import PropTypes from 'prop-types'
Detail.propTypes = {
    data:PropTypes.array,
    title:PropTypes.boolean
}
设置子组件默认属性值
Detail.defaultProps = {
    abc:'子组件的默认值'
}
*/
