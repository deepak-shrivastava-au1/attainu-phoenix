import React from 'react';
import {stateMapper} from './store.js';
import {connect} from 'react-redux';
import {Contact} from './contact.js';

class DisplayComponent extends React.Component{
    renderContacts(){
        return this.props.contacts.map(function(c){
            return (
                <Contact key = {c.name} c = {c}/>
            )
        });
    }
    
    render() {
        return(
           <div>
               <table className = "table table-striped">
                   <thead>
                       <tr>
                           <th>Name:</th>
                           <th>Phone:</th>
                           <th>Action:</th>
                       </tr>
                   </thead>
                   <tbody>
                    {this.renderContacts()}
                   </tbody>
               </table>
           </div>
            
        );
    }
}
let Display = connect(stateMapper)(DisplayComponent);
export {Display};