import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div className="Form">
                <form onSubmit={(evnt) => this.props.handleSubmit(evnt)}>
                    <input
                        placeholder='Type a new task'
                        value={this.props.inputValue}
                        onChange={(evnt) => this.props.handleChange(evnt)}
                    />
                </form>
            </div>
        )
    }
}

export default Form;