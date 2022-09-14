import React, { Component } from 'react';
import posed from 'react-pose';
import UserConsumer from '../context';

var uniqid = require('uniqid');
const Animation = posed.div({
    visible: {
        opacity : 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity : 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

export default class AddUSer extends Component {
  state ={
    visible : false,
    name : "",
    department : "",
    salary : ""
  }

  changeVisibility = (e) => {
    this.setState({
        visible : !this.state.visible
    })
  }

  changeInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value,
        [e.target.department] : e.target.value,
        [e.target.salary] : e.target.value
    })
  }

  addUser = (dispatch,e) => {
    e.preventDefault();
    const {name,department,salary} = this.state;
    const newUser = {
        id : uniqid(),
        name,
        department,
        salary
    }

    dispatch({type: "ADD_USER", payload:newUser});
    console.log(newUser);
  }  

  render() {
    const {visible, name, department, salary} = this.state;
    return <UserConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
                    <div className="col-md-8 mb-4">
                        <button onClick={this.changeVisibility} className='btn btn-success w-100 mb-2'>{visible ? "Hide From" : "Show Form"}</button>    
                        <Animation pose={visible ? "visible" : "hidden"}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add User Form</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                                        <div className="form-group mb-2">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id='id' 
                                                name='name' placeholder='Enter Name' 
                                                className='form-control' 
                                                value={name}
                                                onChange = {this.changeInput}
                                                />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="department">Department</label>
                                            <input type="text" id='department' 
                                                name='department' placeholder='Enter Department' 
                                                className='form-control' 
                                                value={department}
                                                onChange = {this.changeInput}
                                                />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="salary">Salary</label>
                                            <input type="text" id='salary' 
                                                name='salary' placeholder='Enter Salary' 
                                                className='form-control' 
                                                value={salary}
                                                onChange = {this.changeInput}
                                                />
                                        </div>
                                        <button className="btn btn-danger w-100" type='submit'>Add User</button>
                                    </form>
                                </div>
                            </div>
                        </Animation>
                    </div>
                )
            }
        }
    </UserConsumer>

  }
}
