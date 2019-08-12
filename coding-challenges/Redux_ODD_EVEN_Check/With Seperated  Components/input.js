
import React from 'react';
import {connect} from 'react-redux';
import {oddEvenMapper} from './store.js';

class InputComponent extends React.Component{

    constructor(props){
        super(props);
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(event){
        let number = parseInt(event.target.value);

        if(isNaN(number)){
            this.props.dispatch({
                type: "CHECK_NUMBER",
                number: 0
            });
        }
        else{
        this.props.dispatch({
            type: "CHECK_NUMBER",
            number: number
        }); 
    }
}
    render(){
        return(
            <input onChange = {this.inputChange} type = "text" />
        );
    }
}
let Input = connect(oddEvenMapper)(InputComponent);

export {Input};