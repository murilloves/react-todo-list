import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="List">
                <span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
                    {this.props.todo.value}
                </span>
                <button onClick={() => this.props.handleClick(this.props.index)}>
                    {this.props.todo.done ? 'Undo' : 'It\'s Done!'}
                </button>
            </div>
        )
    }
}


export default Task;