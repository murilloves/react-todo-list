import React from 'react';

const Form = ({inputValue, handleSubmit, handleChange}) => {
    return (
        <div className="Form">
            <form onSubmit={(evnt) => handleSubmit(evnt)}>
                <input
                    placeholder='Type a new task'
                    value={inputValue}
                    onChange={(evnt) => handleChange(evnt)}
                />
            </form>
        </div>
    )
}

export default Form;
