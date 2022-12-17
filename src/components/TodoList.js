import React, {Component} from 'react'
import todoStore from "../stores/TodoStore";
import TodoItem from "./TodoItem"
import {observer} from 'mobx-react'

@observer
class TodoList extends Component{

    render() {
        return (
            <section className={"main"}>
                <ul className={"todo-list"}>
                    {
                        todoStore.todos.map((todo)=>{
                            return(
                                <TodoItem active={todo.active} title={todo.title} todoid={todo.id}/>
                            )
                        })
                    }
                </ul>
            </section>
        );
    }
}

export default TodoList