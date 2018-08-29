import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// const URL = 'http://localhost:3003/api/todos'

let list = [];
let iterator = 0;

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh();
    }

    refresh() {
        // axios.get(`${URL}?sord=-createdAt`)
        //     .then(resp => this.setState({...this.state, description: '', list: resp: data}))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        // axios.post(URL, { description })
        //     .then(resp => this.refresh())
        {
            this.setState({...this.state, description: ''})
            list.push({
                _id: iterator,
                description,
                done: false
            })
            iterator++;
        }
    }

    handleRemove(todo) {
        // axios.delete(`${URL}/${todo._id}`)
        //     .then(resp => this.refresh())
        {
            list = list.filter( listItem => {
                if (listItem.description.indexOf(todo.description) === -1) {
                    return listItem;
                }
            });
            iterator--;
            this.setState({...this.state, list: []})
        }
    }

    handleMarkAsDone(todo) {
        // axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
        //     .then(resp => this.refresh())
        {
            list.forEach( listItem => {
                if (listItem._id === todo._id) {
                    listItem.done = true
                }
            });
            this.setState({...this.state, description: ''})
        }
    }

    handleMarkAsPending(todo) {
        // axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
        //     .then(resp => this.refresh())
        {
            list.forEach( listItem => {
                if (listItem._id === todo._id) {
                    listItem.done = false
                }
            });
            this.setState({...this.state, description: ''})
        }
    }

    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList
                    list={list}
                    // list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}
