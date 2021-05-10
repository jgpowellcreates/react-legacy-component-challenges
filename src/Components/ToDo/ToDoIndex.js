import React, {Component} from 'react';

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
            newTask: ''
        }
    }

    handleChange(e) {
        this.setState({
            newTask: e.target.value
        })
    }

    addToList = () => {
        this.setState({
            toDoList: [...this.state.toDoList, this.state.newTask],
            newTask: ''
        })
    }

    removeFromList(index) {
        console.log(index);
        this.setState({
            toDoListL: this.state.toDoList.splice(index, 1)
        })
    }

    render() {
        return(
            <div>
                <input type="text" style={{width: "300px"}} placeholder="Add An Item to your To-Do List..." value={this.state.newTask} onChange={(e) => this.handleChange(e)} />
                <button onClick={this.addToList}>Add My Item</button>
                <h3 style={{padding: "20px 0 10px 0", borderBottom: "5px dashed navy", width: "100%"}}>My To Do List</h3>
                <table style={{width: "100%"}}>
                        {this.state.toDoList.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <td><button onClick={() => this.removeFromList(index)}>Done!</button></td>
                            </tr>
                        ))}
                </table>
                {this.state.toDoList.length == 0 ? <h6>You don't have any tasks left. Take it easy!</h6> : <></> }
            </div>
        )
    }
}