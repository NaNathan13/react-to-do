import React, {Component} from 'react';
import '../App.css';

class ToDo extends Component {
    render () {
        return (
            <div>
                <li className="to-dos">
                    <input type="checkbox" checked={ this.props.isCompleted } onChange={this.props.toggleComplete} />
                    <span>{ this.props.description }</span>
                    <button className="x-box" onClick={this.props.deleteTodo}>X</button>
                </li>
                
            </div>
        );
    }
}



export default ToDo;
