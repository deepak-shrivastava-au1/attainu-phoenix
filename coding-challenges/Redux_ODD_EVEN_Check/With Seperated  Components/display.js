
import React from 'react';
import {connect} from 'react-redux';
import {oddEvenMapper} from './store.js';

class DisplayComponent extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        if(this.props.number == 0){
            return <h2>Please Enter a Number to Check ODD/EVEN</h2>
        }
        if(this.props.isEven){
            return <h2>{this.props.number} is Even</h2>
        }
       else{
       return <h2>{this.props.number} is Odd</h2>
       }
    }
}
let Display = connect(oddEvenMapper)(DisplayComponent);

export {Display};