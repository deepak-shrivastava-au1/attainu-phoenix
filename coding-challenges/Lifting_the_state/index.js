import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: ""
        };

        this.updateInputText = this.updateInputText.bind(this);
    }

    updateInputText(newValue){
        this.setState({
            inputText: newValue
        });
    }
     render(){
          return(
             <div>
                <InputComp updateInputText = {this.updateInputText} />
                <DisplayComp inputText = {this.state.inputText}/>
            </div>
        );
    }
}

class DisplayComp extends React.Component{
    render(){
        return(
            <h2>{this.props.inputText}</h2>
        )
    }
}

class InputComp  extends React.Component{
    constructor(props){
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(event){
        this.props.updateInputText(event.target.value);
        
    }

    render(){
        return(
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h2>Lifting The State Demo</h2>
                        <hr />
                        <input onChange = {this.inputChanged} type = "text" className = "form control" />
                        <hr />
                        
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
