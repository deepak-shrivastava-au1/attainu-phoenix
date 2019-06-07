
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
//Redux section
let counterReducer = function(state, action){

    let newState = {counter: 0};
    if(!state || action.type === "RESET"){
    return newState;
}

if(action.type === "INCREMENT"){
    newState.counter = state.counter + 1;
}
else if(action.type === "DECREMENT"){
    newState.counter = state.counter -1;
}
return newState;
}



let counterStore = createStore(counterReducer);

counterStore.subscribe(function(){
    console.log(counterStore.getState() );
});

function counterStoreMapper(state){
    return state;
}
// React section

class IncrementComponent extends React.Component{
    constructor(props){
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(){
        this.props.dispatch({
            type: "INCREMENT"
        });
    }
    render() {
        return(
            <button onClick = {this.buttonClicked}>+</button>
        );
    }
}

let Increment = connect(counterStoreMapper)(IncrementComponent);

class DecrementComponent extends React.Component{
    constructor(props){
        super(props);
        this.buttonClicked2 = this.buttonClicked2.bind(this);
    }
    buttonClicked2(){
        this.props.dispatch({
            type: "DECREMENT"
        });
    }
    render() {
        return(
            <button onClick = {this.buttonClicked2}>-</button>
        );
    }
}
let Decrement = connect(counterStoreMapper)(DecrementComponent);

class ResetComponent extends React.Component{

    constructor(props){
        super(props);
        this.buttonClicked3 = this.buttonClicked3.bind(this);
    }

    buttonClicked3(){
        this.props.dispatch({
            type: "RESET"
        });
    }
    render() {
        return(
            <button onClick = {this.buttonClicked3}>Reset</button>
        );
    }
}
let Reset = connect(counterStoreMapper)(ResetComponent);

class DisplayComponent extends React.Component{
    render() {
        return(
            <h2>Counter : {this.props.counter}</h2>
        );
    }
}
let Display = connect(counterStoreMapper)(DisplayComponent);

class App extends React.Component{
    render() {
        return(
            <div>
                <Provider store = {counterStore}> 
                    <Display />
                    <Increment />
                    <Decrement />
                    <Reset />
                </Provider>
            </div>
        );
    }
}   

    ReactDOM.render(<App />, document.getElementById("root"));