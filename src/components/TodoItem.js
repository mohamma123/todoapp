import React, {Component} from 'react'
import todoStore from '../stores/TodoStore'
import {observer} from "mobx-react";

@observer
class TodoItem extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { active : this.props.active };
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
        this.handleDestroyClick = this.handleDestroyClick.bind(this);
        this.setState({ active : this.props.active });
    }

    handleCheckBoxClick(event) {
        this.setState({
            active : !this.props.active
        })
        todoStore.toggleTodo(event.target.getAttribute("todoid"))
    }

    handleDestroyClick(event) {
        todoStore.removeTodo(event.target.getAttribute("todoid"))
    }

    render() {
        return (
            <li className={`${this.props.active ? "" : "completed"}`}>
                <div className={"view"}>
                    <input type={"checkbox"}
                           className={"toggle"}
                           todoid={`${this.props.todoid}`}
                           checked={!this.props.active}
                           onClick={event=>this.handleCheckBoxClick(event)}
                    />
                    <label>{this.props.title}</label>
                    <button
                        todoid= {`${this.props.todoid}`}
                        className={"destroy"}
                        onClick={event => this.handleDestroyClick(event)}
                    />
                </div>
            </li>
        );
    }

}

export default TodoItem