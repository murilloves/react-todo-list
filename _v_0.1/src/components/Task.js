import React from 'react';

const Task = ({todo, index, handleClick}) => {
    return (
        <div className="List">
            <span className="text-task" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.value}
            </span>
            <button className={ !todo.done ? 'btn-task btn-done' : 'btn-task btn-undo' } onClick={() => handleClick(index)}>
                {todo.done ? 'undo' : 'Done!'}
            </button>
        </div>
    )
}

export default Task;
