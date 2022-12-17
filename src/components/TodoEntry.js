import React, {Component} from 'react'
import todoStore from '../stores/TodoStore'

class TodoEntry extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
        // Don't call this.setState() here!
        this.state = { active : this.props.active };
    }

    handleKeyDown (e) {
        if(e.keyCode !== 13) return;
        if(!this.state.value) return;
        e.preventDefault()
        todoStore.addTodo(this.state.value)
        this.setState({
            value : ''
        })
    }

    render() {
        return (
            <input
                type={"text"}
                className={"new-todo"}
                placeholder={"What need to be done?"}
                value = {this.state.value}
                onChange={event => this.setState({value: event.target.value})}
                onKeyDown={event => this.handleKeyDown(event) }
            />
        );
    }
}

export default TodoEntry