import React from 'react'
import ReactDOM from 'react-dom'

const USERNAME = "Deepak";
const PASSWORD =  "AttainU";
class LoginForm extends React.Component{
constructor(props){
    super(props);

    this.state = {
        username: "",
        password: ""
    };

    this.usernameChanged = this.usernameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.login = this.login.bind(this);

}

usernameChanged(event){
    this.setState({
        username: event.target.value
    }) ;
}

passwordChanged(event){
    this.setState({
        password: event.target.value
    });
}
login(){
  let username = this.state.username;
  let password = this.state.password;

  if(username == USERNAME && password == PASSWORD){
      alert("Login Successfull !!!");
  }
  else if(username == "" || password == ""){
      alert("Username and passsword should not be empty");
  }
  else{
      alert("Incorrect username and password !")
  }
}

render(){
    return (
        <div className = "container-fluid">
            <div className = "row">
                <div className = "col-md-4 offset-md-4">
                <h2>App Login</h2>
                    <hr></hr>
                    <label>
                        UserName: <input onChange ={this.usernameChanged} className = "form-control" type = "text" />
                        <p></p>
                        Password: <input onChange = {this.passwordChanged} className = "form-control" type = "password" />
                    </label>
                    <p></p>
                    <button onClick = {this.login} className = "btn btn-success">Login</button>
                </div>
            </div>
        </div>
            )
}
}
ReactDOM.render(<LoginForm />, document.getElementById("root"));