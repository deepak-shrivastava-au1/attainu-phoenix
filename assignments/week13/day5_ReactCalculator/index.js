import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component{

    constructor(props){
        super(props);

        this.state = {
           num1: 0,
           num2: 0,
           result: ""
        }
        this.addtion = this.addtion.bind(this);
        this.num1 = this.num1.bind(this);
        this.num2 = this.num2.bind(this);
        this.subtracction = this.subtracction.bind(this);
        this.multiplication = this.multiplication.bind(this);
        this.division = this.division.bind(this);
    }

    num1(event){
        this.setState({
            num1: parseInt(event.target.value)
        });
    }
    num2(event){
        this.setState({
            num2: parseInt(event.target.value)
        });
    }

    addtion(event){
      let num1 = this.state.num1;
      let num2 = this.state.num2;
      
      this.setState({
          result: num1 + num2
      });
    }
    subtracction(event){
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        
        this.setState({
            result: num1 - num2
        });
      }
      multiplication(event){
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        
        this.setState({
            result: num1 * num2
        });
      }
      division(event){
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        
        this.setState({
            result: num1 / num2
        });
      }
    render(){
        return(
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h2>React Calculator:</h2>
                        <input onChange = {this.num1} className = "form-control" type = "number" />
                        <br></br>
                        <input onChange = {this.num2} className = "form-control" type = "number" />
                        <hr></hr>
                        <button onClick ={this.addtion} className = "btn btn-success"> + </button>
                        <button onClick ={this.subtracction} className = "btn btn-success"> - </button>
                        <button onClick ={this.multiplication} className = "btn btn-success"> X </button>
                        <button onClick ={this.division} className = "btn btn-success"> / </button>
                        <hr></hr>
                        <h2>{this.state.result}</h2>
                    </div>
                </div>
            </div>
        )
    }
    
}
ReactDOM.render(<Calculator />, document.getElementById("root"));