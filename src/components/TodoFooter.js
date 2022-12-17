import React, {Component} from 'react'
import todoStore from '../stores/TodoStore'
import {observer} from "mobx-react";


@observer
class TodoFooter extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
        this.changeMood = this.changeMood.bind(this);
    }

    changeMood(event) {
        todoStore.changeMood(event.target.getAttribute("mood"))
    }

    render() {
            return (
                <div className={"footer"}>
                    <div className={"todo-count"}><strong> {todoStore.todos.length} </strong> items left</div>
                    <div className={"filters"}>
                        <li><a mood={todoStore.moods.ALL} className={`${ todoStore.mood === todoStore.moods.ALL ? "selected" : ""}`} onClick={event => this.changeMood(event)}>All</a></li>
                        <li><a mood={todoStore.moods.ACTIVE} className={`${ todoStore.mood === todoStore.moods.ACTIVE ? "selected" : ""}`} onClick={event => this.changeMood(event)}>Active</a></li>
                        <li><a mood={todoStore.moods.COMPLETED}  className={`${ todoStore.mood === todoStore.moods.COMPLETED ? "selected" : ""}`} onClick={event => this.changeMood(event)}>Completed</a></li>
                    </div>
                    <div className={"clear-completed"} onClick={()=>todoStore.clearCompleted()}>
                        Clear completed
                    </div>
                </div>
            )
        }

}

export default TodoFooter