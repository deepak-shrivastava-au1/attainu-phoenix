
import React from 'react';
import {Provider} from 'react-redux';
import {Display} from './display.js';
import {Input} from './input.js';
import {oddEvenStore} from './store.js';


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
export {App};