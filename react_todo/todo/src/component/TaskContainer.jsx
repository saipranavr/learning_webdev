import React, { Component } from 'react'

export default class TaskContainer extends Component {
    render() {
        return (
            <div className="task-container">
                    <ul>
                        {
                            this.props.taskList.map((taskObj)=>{
                                return(
                                    <li className="task-item" key={taskObj.id}>
                                        <p>{taskObj.task}</p>
                                        <button onClick={()=>this.props.deleteTask(taskObj.id)}>Delete</button>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
        )
    }
}
