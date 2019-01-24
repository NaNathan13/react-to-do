import React, {Component} from 'react';

class ToDo extends Component {
    render () {
        return (
            <div>
                <li>
                    <input type="checkbox" checked={ this.props.isCompleted }/>
                    <span>{ this.props.description }</span>
                </li>
            </div>
        );
    }
}

export default ToDo;
