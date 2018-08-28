import React from 'react';

const Task = ({todo, index, handleClick}) => {
    return (
        <div className="List">
            <span className="text-task" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.value}
            </span>
            <button className="btn-task" onClick={() => handleClick(index)}>
                {todo.done ? 'undo' : 'Done!'}
            </button>
        </div>
    )
}

export default Task;
