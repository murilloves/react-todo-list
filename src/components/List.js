import React from 'react';

import Task from './Task';

const List = ({handleClick, todos}) => {
    return (
        <div className="List">
            {todos.map((todo, index) => {
                return (
                    <Task
                        key={index}
                        todo={todo}
                        index={index}
                        handleClick={handleClick}
                    />
                )
            })}
        </div>
    )    
}

export default List;
