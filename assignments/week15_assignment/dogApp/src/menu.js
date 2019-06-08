import React from 'react';
import {connect} from 'react-redux';
import {storeMapper} from './store.js';
import {Button} from './button.js';

class MenuComponent extends React.Component{
    componentDidMount(){
            this.props.dispatch({
                type: "FETCH-MENU"
            })
    }
    render() {
        if(this.props.isMenuLoading){
            return <p>Loding Menu...</p>
        }
        else {
            return (
                this.props.breeds.map(function(b){
                    return <Button  key = {b} breedName = {b} />;
                })
             );
        }

        
        
    }
}
let Menu = connect(storeMapper)(MenuComponent);

export {Menu};