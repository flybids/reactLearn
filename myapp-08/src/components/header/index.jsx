import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onkeydown: props.keydown
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    onKeyDown={this.state.onkeydown}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                />
            </header>
        )
    }
}
