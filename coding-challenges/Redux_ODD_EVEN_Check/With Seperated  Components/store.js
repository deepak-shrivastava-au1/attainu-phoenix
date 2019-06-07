
import {createStore} from 'redux';

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
export {oddEvenStore, oddEvenMapper};