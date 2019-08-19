import React from 'react';
import {connect} from 'react-redux';
import { stateMapper } from './store';

class FormComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            phone: ""
        }
        this.inputName = this.inputName.bind(this);
        this.inputPhone = this.inputPhone.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    inputName(event){
       this.setState({name: event.target.value});
    }
    inputPhone(event){
       this.setState({phone: event.target.value});
    }
    buttonClicked(){
        this.props.dispatch({
          type: "ADD",
          contact: this.state  
        })
    }
    render() {
        return(
           <div>
               <input onChange = {this.inputName} className = "form-control " type = "text" placeholder = "Name" />
               <input onChange = {this.inputPhone}  className = "form-control " type = "text" placeholder = "Phone" />
               <p></p>
               <button onClick = {this.buttonClicked} className = "btn btn-success">Add Contact</button>
           </div>
            
        );
    }
}
let Form = connect(stateMapper)(FormComponent);
export {Form};