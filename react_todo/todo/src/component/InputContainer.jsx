import React, { Component } from 'react'

export default class InputContainer extends Component {
    state = {
        currTask:""
    }
    handleInput = (e)=>{
        let currVal = e.target.value;
        this.setState({
            currTask : currVal
        })
    }
    sendStateToParent = ()=>{
        this.props.addTask(this.state.currTask);
        this.setState({
            currTask:""
        })
    }
    render() {
        return (
            <div className="input-container">
                    <input type="text" value={this.state.currTask} onChange={this.handleInput}/>
                    <button onClick={this.sendStateToParent}>Submit</button>
            </div>
        )
    }
}
