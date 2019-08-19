import {createStore} from 'redux';
import { functionTypeAnnotation } from '@babel/types';

let reducer = function(state, action) {
    //set the initial/default state
    // put all the property that you want to be the part of state
    //and provide sensible default values too.
    let initialState = {
        contacts: []
    };
    if(!state) {return initialState; }
    
    let newState = initialState;

    //copy array which you want from the old state.
    newState.contacts = Array.from(state.contacts);

    //now write your action

    if(action.type === "ADD"){
      newState.contacts.push(action.contact);
    }
    if(action.type === "DELETE"){
        newState.contacts = newState.contacts.filter( c => c.name != action.name );
    }
    //finally return the newState.
    return newState;
}
let store = createStore(reducer);

function stateMapper(state) {
    return state;
}
store.subscribe(function() {
        console.log(store.getState());
    })


export {store, stateMapper};