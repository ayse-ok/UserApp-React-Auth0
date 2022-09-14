import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserConsumer from '../context';

// rcc
class User extends Component {

    // default proptypes
    static defaultProps = {
        name : "Bilgi yok",
        salary : "Bilgi yok",
        department : "Bilgi yok"
    }

     
    // constructor(props){
    //     super(props);

    //     // state oluşturma 1
    //     this.state = {
    //         isVisible : false
    //     }

    //     // bind etme 1
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }

    // state oluşturma 2
    state = {
        isVisible : false
    }


    // arrow function şeklinde yazasan oto bind olur
    onClickEvent = (e) => {
      this.setState({
        isVisible : !this.state.isVisible
      })        
    }

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        
        // consumer dispatch kullanımı
        dispatch({type: "DELETE_USER", payload:id});
    }

    render() {
        // destructing
        const {name, department,salary} = this.props;
        const {isVisible} = this.state;

        return(
            <UserConsumer> 
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className='col-md-8 mb-4' >
                                <div className='card' style={isVisible ? {background : "#E8F8F5", color : "#CB4335"} : null}>
                                    <div className='card-header d-flex justify-content-between'>
                                        <h4 className='d-inline' onClick={this.onClickEvent.bind(this)}>{name}</h4>
                                        <i className="fa fa-trash" onClick={this.onDeleteUser.bind(this,dispatch)} style={{cursor : "pointer"}}></i>
                                    </div>
                
                                    { isVisible ? 
                                        <div className='card-body'>
                                            <p className='card-text'>Salary: {salary}</p>
                                            <p className='card-text'>Department: {department}</p>                
                                        </div> : null  
                                    }                                    
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default User;
