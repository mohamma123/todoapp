import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {

    moods = {
        ALL: 'all',
        ACTIVE: 'active',
        COMPLETED: 'completed'
    }

    @observable todos = []
    @observable mood = ''
    mainList = []

    constructor() {
        this.mood  = this.moods.ALL
        this.addTodo("test1")
        this.addTodo("test2")
    }

    @action
    changeMood(current_mood = this.mood) {
        this.mood = current_mood
        switch (this.mood) {
            case this.moods.ALL:
                this.todos = this.mainList
                break;
            case this.moods.ACTIVE:
                this.todos = this.mainList.filter(todo => todo.active === true)
                break;
            case this.moods.COMPLETED:
                this.todos = this.mainList.filter(todo => todo.active === false)
                break;
        }
    }

    @action
    addTodo(title) {
        let tempNewTask = new TodoModel(this, title)
        this.mainList.push(tempNewTask)
        this.changeMood()
    }

    @action
    clearCompleted() {
        this.mainList = this.mainList.filter(todo => todo.active === true)
        this.todos = this.mainList
    }


    @action
    removeTodo(id) {
        this.mainList = this.mainList.filter(
            (todo) => {
                return !(todo.id === id)
            }
        )
        this.changeMood()
    }

    @action
    toggleTodo(id) {
        for (var i in this.mainList) {
            if (this.mainList[i].id === id) {
                this.mainList[i].active = !this.mainList[i].active;
                break; //Stop this loop, we found it!
            }
        }
        this.changeMood()
    }
}


const todoStore = new TodoStore()
export default todoStore
