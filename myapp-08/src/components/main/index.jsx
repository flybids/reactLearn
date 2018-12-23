import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.props.data.length > 0 && this.props.data.map((item, index) => {
                            return (
                                <li className="completed" key={item.id}>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" defaultChecked />
                                        <label>{item.name}</label>
                                        <button
                                            className="destroy"
                                            onClick={
                                                this.props.rmFn.bind(this, index)
                                            }
                                        >
                                        </button>
                                    </div>
                                    <input className="edit" defaultValue="Create a TodoMVC template" />
                                </li>
                            )
                        })
                    }
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Buy a unicorn</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" defaultValue="Rule the web" />
                    </li>
                </ul>
            </section>
        )
    }
}
