import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import TodoList from './components/TodoList'
import TodoEntry from "./components/TodoEntry";
import TodoFooter from "./components/TodoFooter";

@observer
class App extends Component {
    render() {
        return (
            <div className={"todoapp"} id={"todoapp"}>
                <header className={"header"}>
                    <h1>todo</h1>
                    <TodoEntry />
                </header>
                <TodoList/>
                <TodoFooter />
            </div>
        );
    }
}


export default App;
