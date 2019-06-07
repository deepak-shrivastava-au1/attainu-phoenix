import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

let oddEvenReducer = function(state, action){
        let newState ={
            number: 0,
            isOdd: false,
            isEven: false
        };
    if (!state){
        return newState;
    }
    if(action.type === "CHECK_NUMBER"){
        newState.number = action.number;
        if(newState.number % 2 === 0){
            newState.isEven = true;
            newState.isOdd = false; 
        }
        else{
            newState.isEven = false;
            newState.isOdd = true;
        }
    }
    return newState;
}
let oddEvenStore = createStore(oddEvenReducer);

let oddEvenMapper = function(state){
    return state;
}


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

class App extends React.Component{
    render(){
        return(
            <Provider store = {oddEvenStore}>
            
                <Input />
                <Display />
            
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));