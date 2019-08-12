import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputNumber: 0,
            odd: false,
            even: false
        };

        this.inputChanged = this.inputChanged.bind(this);
        this.check = this.check.bind(this);
    }


    inputChanged(event){
        this.setState({
            inputNumber: event.target.value,
        });
       
    }

    check(){
        let num = this.state.inputNumber;
       
        if(num % 2 == 0){
            this.setState({
                even: true,
                odd: false
            });
        }
        else {
            this.setState({
                odd: true,
                even: false
            });
        }

    }

    showResult(){
        
       if(this.state.inputNumber == ""){
           return null;
       }
        else if(this.state.odd){
            return <h2>Odd Number</h2>
        } else if(this.state.even){
            return <h2>Even Number</h2>
        } 
        
    }
    render(){
        return(
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h2>Odd or Even</h2>
                        <hr />
                        <input onChange = {this.inputChanged} type = "number" className  = "form-control" />
                        <hr />
                        <button onClick = {this.check} className = "btn btn-success">Check Odd or Even</button>
                        <hr />
                        {this.showResult()} 
                       
                    </div>
                </div>
            </div>

        )
    }
}
   
ReactDOM.render(<App />, document.getElementById("root"));
