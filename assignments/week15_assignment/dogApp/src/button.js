import React from 'react'; 
import {connect} from 'react-redux';
import { storeMapper } from './store';

class ButtonComponent extends React.Component{
    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(){
        this.props.dispatch({
            type: "FETCH_PICTURE",
            breedName: this.props.breedName
        })
    }
    render() {
        return(
            <button onClick = {this.buttonClicked} className ="btn btn-success">{this.props.breedName}</button>
        )
    }
}
let Button = connect(storeMapper)(ButtonComponent);
export {Button};