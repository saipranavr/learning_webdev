import React, { Component } from 'react'
import InputContainer from './InputContainer'
import TaskContainer from './TaskContainer'

export default class Todo extends Component {
    state= {
        taskList: []
    }

    deleteTask = (cId)=>{
        let filteredTasks = this.state.taskList.filter((taskObj)=>{
            return taskObj.id!==cId;
        })
        this.setState({
            taskList: filteredTasks
        });
    }
    addTask = (currTask)=>{
        let tempArr = [...this.state.taskList,{id: this.state.taskList.length,task: currTask}]
        this.setState(
            {
                taskList: tempArr
            })
    }
    render() {
        return (
            <div>
                <InputContainer addTask={this.addTask}></InputContainer>
                <TaskContainer deleteTask={this.deleteTask} taskList={this.state.taskList}></TaskContainer>
            </div>
        )
    }
}
