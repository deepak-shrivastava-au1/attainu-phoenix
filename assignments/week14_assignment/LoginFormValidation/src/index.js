import React from 'react'
import ReactDOM from 'react-dom'

const USERNAME = "Deepak";
const PASSWORD = "Shrivastava";

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.loginButton = this.loginButton.bind(this);
    }
    usernameChanged(event){
        this.setState({
            username: event.target.value
        });
    }

    passwordChanged(event){
        this.setState({
            password: event.target.value
        });
    }

    loginButton(){
         let username = this.state.username;
         let password = this.state.password;

         if(username == "" || password == ""){
             alert("Username and Password can not be empty");
         }
         if(username == USERNAME && password == PASSWORD){
             alert("welcome  "+  username );
         }
         if(username != USERNAME || password != PASSWORD){
             alert("Please check the username and password");
         }     
    }
    render(){
        return(
            <div className= "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h3><b>Login</b></h3>
                        <p></p>
                        <label>
                        <p></p>
                            UserName:  
                            <p></p><input onChange = {this.usernameChanged} type= "text"></input>
                        </label>
                        <p></p>
                        <label>
                        <p></p>
                            Password: <p></p>
                             <input onChange = {this.passwordChanged} type= "password"></input>
                        </label>
                        <p></p>
                        <button onClick = {this.loginButton} className= "btn btn-success">Please Login</button>
                    </div>
                </div>
            </div>
        )
    }

}
ReactDOM.render(<LoginPage />, document.getElementById("root"));