import React from 'react';
import {stateMapper} from './store.js';
import {connect} from 'react-redux';

class ContactComponent extends React.Component{
constructor(props){
    super(props);
    this.buttonDelete  = this.buttonDelete.bind(this);
}
buttonDelete(){
 this.props.dispatch({
     type: "DELETE",
     name: this.props.c.name
 });
}

    render(){ 
        return(
            <tr>
                <td>{this.props.c.name}</td>
                <td>{this.props.c.phone}</td>
                <td>
                    <button onClick = {this.buttonDelete} className = "btn btn-danger btn-sm">x</button>
                </td>
            </tr>
        );
    }
}
let Contact = connect(stateMapper)(ContactComponent);

export {Contact};