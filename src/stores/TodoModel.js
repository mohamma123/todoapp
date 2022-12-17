import {observable, action} from 'mobx'

export default class TodoModel {
    store
    id
    @observable title
    @observable active

    constructor(store, title) {
        this.id = title + (Math.floor((new Date())/1000)).toString()
        this.store = store
        this.title = title
        this.active = true
    }

    @action
    toggle() {
        this.active = !this.active
    }
}
