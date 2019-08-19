import React from 'react';
import {Form} from "./form.js"; 
import {Display} from "./display.js";
import {Provider} from 'react-redux';
import {store} from './store.js';

class App extends React.Component{
    render() {
        return(
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                    <h2>Contact App</h2>
                    <hr />
                    
                    <Provider store = {store}>
                        <Form />
                        <hr />
                        <Display />
                    </Provider>
                    </div>
                </div>
            </div>
            
        );
    }
}
export {App};